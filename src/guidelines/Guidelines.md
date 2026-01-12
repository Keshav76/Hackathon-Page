# 📦 Model Submission & Testing Guideline  
*(Plug-and-Play Contract for Automated Evaluation)*

---

## Objective

The goal of this guideline is to ensure that **any submitted model can be tested automatically** on a new dataset **without manual intervention**, **without redesigning training code**, and **without SageMaker deployment overhead**.

If this document is followed, the evaluator should be able to:
1. Download `model.tar.gz`
2. Run a single test script
3. Obtain predictions

---

## 🔴 Non-Negotiable Rule

> **If your `model.tar.gz` cannot be used to generate predictions using a single function call, the submission is considered incomplete.**

This document defines the **minimum contract** required for acceptance.

---

## 1️⃣ Required Directory Structure

Your submission **must** be a single file:

```bash
model.tar.gz
```

When extracted, it **must contain at least the following structure**:

```bash
model.tar.gz
├── model.*                 # model weights or full serialized model
├── requirements.txt        # mandatory
├── code/
│   └── inference.py        # mandatory
└── README.md               # mandatory
````

Optional files are allowed, but **nothing listed above may be missing**.

---

## 2️⃣ requirements.txt (Mandatory)

### Purpose

`requirements.txt` defines the **exact runtime dependencies** required to load and run the model.

This enables:
- Automated environment setup
- Framework/version consistency
- Zero manual debugging during evaluation

---

### Rules for `requirements.txt`

- Must include **all non-standard Python dependencies**
- Must specify **framework versions explicitly**

✅ Good:
```text
torch==2.0.1
numpy==1.24.3
scikit-learn==1.3.0
````

❌ Not allowed:

```text
torch
latest
git+https://...
```

⚠️ GPU-specific packages are discouraged
⚠️ Assume **CPU-only evaluation**

---

## 3️⃣ Mandatory Inference Contract (`inference.py`)

### Purpose

`inference.py` acts as a **black-box wrapper** around your model.
It hides **all internal details** (architecture, preprocessing, framework).

The evaluator should never need to inspect or modify model internals.

---

### Required Function (Mandatory)

Your `inference.py` **must expose exactly one callable**:

```python
def predict(batch):
    """
    Input:
        batch: list | numpy.ndarray | torch.Tensor
    Output:
        numpy.ndarray
    """
```

---

### Strict Rules

* The evaluator **must not**:

  * Load model weights manually
  * Instantiate the model manually
  * Apply preprocessing manually
* All logic **must be handled internally** inside `inference.py`

---

### What `predict()` Must Handle Internally

* Model loading (lazy loading recommended)
* Preprocessing
* Forward pass
* Postprocessing
* CPU-safe execution

---

## 4️⃣ Minimal Reference Implementation (Example)

You may adapt this internally, but the **external interface must remain identical**.

```python
import torch
import numpy as np

_model = None

def _load_model():
    global _model
    if _model is None:
        _model = ...  # define model architecture
        _model.load_state_dict(
            torch.load("model.pth", map_location="cpu")
        )
        _model.eval()

def predict(batch):
    _load_model()

    if not isinstance(batch, torch.Tensor):
        batch = torch.tensor(batch, dtype=torch.float32)

    with torch.no_grad():
        output = _model(batch)

    return output.cpu().numpy()
```

Training logic **does not need to change** — only packaging behavior matters.

---

## 5️⃣ README.md (Mandatory)

Every submission **must include a `README.md`** with the following sections
**in the exact order listed below**.

---

### 5.1 Model Overview

```text
Model Name:
Task Type: (classification / regression / etc.)
Framework: (PyTorch / TensorFlow / sklearn)
Framework Version:
```

---

### 5.2 Input / Output Specification

```text
Input:
- Shape:
- Dtype:
- Description:

Output:
- Shape:
- Meaning of each dimension:
```

---

### 5.3 How to Replicate Predictions (Mandatory)

This section **must allow reproduction without SageMaker**.

Example:

```bash
# Extract model
tar -xvzf model.tar.gz

# Install dependencies
pip install -r requirements.txt

# Run test script
python test.py
```

Python usage:

```python
import inference
preds = inference.predict(data)
```

---

### 5.4 Training Summary (High-Level Only)

```text
Dataset used:
Loss function:
Optimizer:
Key preprocessing steps:
```

---

## 6️⃣ Team Details (Fixed Format – Mandatory)

At the **end of `README.md`**, include the following block
**exactly as shown below**:

```text
====================
TEAM DETAILS
====================
Team Number: 
Team Name:
Institution / Organization:

Primary Contact:
- Name:
- Email:
```

Submissions **without this block will not be evaluated**.

---

## 7️⃣ What the Evaluator Will Do (Automated Testing Script)

The evaluator will run code equivalent to the following:

```python
import tarfile
import subprocess
import sys
import os

# Extract model
tarfile.open("model.tar.gz").extractall()

# Install dependencies
subprocess.check_call([
    sys.executable, "-m", "pip", "install", "-r", "requirements.txt"
])

# Load inference module
sys.path.append("code")
import inference

# Run predictions
predictions = inference.predict(test_data)
```

If this fails, the issue is considered **submission-side**.

---

## 8️⃣ Common Reasons for Rejection

| Issue                      | Reason                       |
| -------------------------- | ---------------------------- |
| Missing `inference.py`     | No automation possible       |
| Missing `predict()`        | Contract violation           |
| Missing `requirements.txt` | Environment not reproducible |
| Manual loading required    | Not plug-and-play            |
| Missing README             | No replication clarity       |
| Hidden preprocessing       | Non-reproducible             |

---

## 9️⃣ Final Acceptance Checklist

Before submitting, verify:

* [ ] `model.tar.gz` extracts successfully
* [ ] `code/inference.py` exists
* [ ] `predict(batch)` runs end-to-end
* [ ] `requirements.txt` installs cleanly
* [ ] No manual steps required
* [ ] README follows required format
* [ ] Team details included

---

## ✅ Final Statement

> **This guideline is intentionally minimal.**
> If followed, it guarantees **fast, fair, and automated evaluation** across all teams.