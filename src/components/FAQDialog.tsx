import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { HelpCircle } from "lucide-react";

export function FAQDialog({
  className,
  noSymbol = false,
}: {
  className?: string;
  noSymbol?: boolean;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className={
            className ||
            "cursor-pointer border-2 border-white bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-600 px-8 py-6 text-lg gap-2"
          }
        >
          {noSymbol ? null : <HelpCircle className="w-5 h-5 mr-2" />}
          FAQs
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl bg-white text-gray-900 border-gray-100">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl lg:text-4xl max-w-4xl leading-tight">
            Frequently Asked Questions
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-6 py-6 overflow-y-auto max-h-[70vh] custom-scrollbar pr-4">
          {/* Overview Questions Section */}
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-blue-700 border-b border-blue-200 pb-2">
              Overview Questions
            </h3>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> What is the mode of the
              hackathon?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              The hackathon will be conducted in{" "}
              <span className="font-medium px-2 py-0.5 bg-blue-100 rounded text-blue-700">
                hybrid
              </span>{" "}
              mode, allowing participants to take part either online or
              on-ground.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> Who can participate in the Hackathon?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              Health tech startups, AI researchers, Academic teams, Healthcare Providers, Students, and healthcare innovators can all participate in the Hackathon.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> Is participation free?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              Yes. Registration is completely free.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> How can I contribute?
            </h4>
            <div className="pl-6 space-y-2">
              <ul className="text-gray-600 list-disc list-inside space-y-1">
                <li>Share Datasets</li>
                <li>Build Models</li>
                <li>Network and Collaborate with others</li>
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> What are the timelines?
            </h4>
            <div className="pl-6 space-y-2">
              <ul className="text-gray-600 list-none space-y-2">
                <li className="flex items-start gap-2">
                  <span className="font-medium px-2 py-0.5 bg-blue-100 rounded text-blue-700 text-sm whitespace-nowrap">Jan 12 - Jan 18</span>
                  <span>Pre Hackathon, Know our platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium px-2 py-0.5 bg-blue-100 rounded text-blue-700 text-sm whitespace-nowrap">Jan 19 - Jan 23</span>
                  <span>Hackathon Week, Build and test models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium px-2 py-0.5 bg-green-100 rounded text-green-700 text-sm whitespace-nowrap">Jan 24</span>
                  <span>Final Assessment & Rewards</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> What are the use cases?
            </h4>
            <div className="pl-6 space-y-2">
              <ul className="text-gray-600 list-disc list-inside space-y-1">
                <li>Bone age prediction (wrist X-rays) - Predicting age based on wrist X-ray</li>
                <li>Diabetic retinopathy detection (fundus images) - Detecting whether someone has diabetic retinopathy</li>
                <li>Cataract detection (mobile-captured eye photos) - Detecting whether someone has cataract</li>
              </ul>
              <p className="text-sm text-gray-500 italic">
                Use cases / Tasks against each dataset are listed in the problem statement sections.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> What prizes are available?
            </h4>
            <div className="pl-6 space-y-2">
              <p className="text-gray-600 leading-relaxed">
                Any team whose model surpasses the defined benchmark for a problem/use case will qualify for the{" "}
                <span className="font-semibold text-green-700">₹12 lakh prize pool</span>. The final prize distribution will be determined based on each team's leaderboard ranking and the extent to which their model outperforms the benchmark.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> Where can I register?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              You can register here:{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScM9IN0b867oAN0xke3nLya7IJJS5iqc7YlMkUHJzDzOfasFQ/viewform"
                target="_blank"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Registration Form
              </a>
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> What happens after our
              registration is approved?
            </h4>
            <div className="pl-6 space-y-2">
              <p className="text-gray-600 leading-relaxed">
                Once your registration is approved, teams will be required to
                attend an{" "}
                <span className="font-semibold text-gray-900">
                  introductory session
                </span>{" "}
                (with a choice of three slots; dates to be announced). This
                session will include a platform walkthrough and distribution of
                login credentials.
              </p>
              <p className="text-gray-600 leading-relaxed">
                After this, teams may explore the platform and begin training
                models using their own datasets.
              </p>
              <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded-lg border border-amber-100 italic">
                <strong>Note:</strong> Testing against the official held-out
                datasets will commence on January 19th.
              </p>
            </div>
          </div>

          {/* Logistics & On-Ground Participation Section */}
          <div className="mt-6 mb-2">
            <h3 className="text-lg font-semibold text-blue-700 border-b border-blue-200 pb-2">
              Logistics & On-Ground Participation
            </h3>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> What are the
              requirements for on-ground participation?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              For on-ground participation, all participants are required to
              bring their own laptops for coding and other competition-related
              tasks.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> Is accommodation
              provided at IIT Kanpur?
            </h4>
            <div className="pl-6 space-y-2">
              <p className="text-gray-600 leading-relaxed">
                Yes, accommodation will be provided in studio apartments at IIT
                Kanpur on a twin-sharing basis.
              </p>
              <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded-lg border border-amber-100 italic">
                <strong>Note:</strong> Limited on-campus accommodation is
                available only for students, and will be allotted on a
                first-come, first-served basis.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> What about the meal
              arrangements?
            </h4>
            <div className="pl-6 space-y-2">
              <p className="text-gray-600 leading-relaxed">
                Meals (breakfast, lunch, and dinner) will be provided at the
                Visitors' Hostel, IIT Kanpur.
              </p>
              <p className="text-sm font-medium text-blue-700">
                Meal arrangements will be available for the duration 18th–24th
                January.
              </p>
            </div>
          </div>

          {/* Problem Statement & Data Section */}
          <div className="mt-6 mb-2">
            <h3 className="text-lg font-semibold text-blue-700 border-b border-blue-200 pb-2">
              Problem Statement & Data
            </h3>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> Can I upload my own data against the pre-defined problem statements?
            </h4>
            <div className="pl-6 space-y-2">
              <p className="text-gray-600 leading-relaxed">
                Yes, teams are strongly encouraged to upload their own data as long as the data is fully anonymized or de-identified. Under no circumstances should raw personal health information (PHI) or identifiable patient details be included.
              </p>
              <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded-lg border border-amber-100 italic">
                <strong>Note:</strong> Before uploading, teams are strongly encouraged to review the sample schema, column names, and data types provided in the server's test datasets.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> How do I preprocess my dataset?
            </h4>
            <div className="pl-6 space-y-2">
              <p className="text-gray-600 leading-relaxed">
                The platform allows you to preprocess your uploaded dataset before training. You can apply essential cleaning operations such as handling null values, removing duplicates, normalizing features, and identifying or removing outliers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Before proceeding, we strongly recommend reviewing the preprocessing guidelines provided to ensure your dataset is prepared in a manner that supports reliable model training and evaluation.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> Does my data stay private?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              Your data will be uploaded to your own EC2 container on the NHA infrastructure. Eventually the platform will allow for local training on your own infrastructure but this provision is disabled for the purpose of this hackathon.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> Will I see the test data being used for evaluation?
            </h4>
            <div className="pl-6 space-y-2">
              <p className="text-gray-600 leading-relaxed">
                No. Test Datasets are restricted for view to ensure unbiased testing and validation. However, you will be able to view the Data Schema, Columns and Value Distribution in the test dataset.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> How do you ensure that my data is not being saved by other organisations when I participate in co-training?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              Federated learning is designed precisely to prevent your data from ever being accessed, copied, or saved by any other organization.
            </p>
          </div>

          {/* Federated Learning Section */}
          <div className="mt-6 mb-2">
            <h3 className="text-lg font-semibold text-blue-700 border-b border-blue-200 pb-2">
              Federated Learning
            </h3>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> What is Federated Learning?
            </h4>
            <div className="pl-6 space-y-2">
              <p className="text-gray-600 leading-relaxed">
                Healthcare data is sensitive, fragmented, and scarce. To enable development of AI Models that are well trained on diverse datasets, federated learning allows:
              </p>
              <ul className="text-gray-600 list-disc list-inside space-y-1">
                <li>Model training without moving data</li>
                <li>Double-blind validation</li>
                <li>Preservation of privacy & regulatory compliance</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                This solves the "AI validation trilemma".
              </p>
            </div>
          </div>

          {/* Training and Platform Section */}
          <div className="mt-6 mb-2">
            <h3 className="text-lg font-semibold text-blue-700 border-b border-blue-200 pb-2">
              Training and Platform
            </h3>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> Who will provide necessary infrastructure / GPUs?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              National Health Authority will provide the necessary infrastructure.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> Can I choose any model I want?
            </h4>
            <div className="pl-6 space-y-2">
              <p className="text-gray-600 leading-relaxed">Yes. You can:</p>
              <ul className="text-gray-600 list-disc list-inside space-y-1">
                <li>Use built-in pipeline which comprises of models: Linear Regression, Logistic Regression, Multi Layer Perceptron, CNN, SVM, SVR (Regression), Decision Tree Classifier, Decision Tree Regressor, Random Forest</li>
                <li>Set your own model configs</li>
                <li>Or upload your own model as a Python script</li>
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> Can I upload my own custom model?
            </h4>
            <div className="pl-6 space-y-2">
              <p className="text-gray-600 leading-relaxed">
                Yes, you may use and upload your own custom model. In this case, however, your model will not be able to participate in federated learning with datasets contributed by other teams, since doing so would involve sharing your model architecture with other teams.
              </p>
              <p className="text-sm text-blue-700 bg-blue-50 p-3 rounded-lg border border-blue-100">
                <strong>Note:</strong> The platform follows an 'Open Source, Closed Weights' principle — model architectures can be openly shared, while model weights remain private.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Even if you opt out of sharing your architecture, you can still benchmark your custom model on the platform's test datasets and receive performance metrics against the predefined benchmark.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> How many times can I test my model?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              Unlimited during Hackathon Week, but each test incurs a small statistical "cost".
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> What do I see during training?
            </h4>
            <div className="pl-6 space-y-2">
              <ul className="text-gray-600 list-disc list-inside space-y-1">
                <li>Dataset information</li>
                <li>Model Config</li>
                <li>Logs</li>
                <li>Results</li>
                <li>Action</li>
                <li>Retry Training</li>
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> What is price negotiation?
            </h4>
            <div className="pl-6 space-y-2">
              <p className="text-gray-600 leading-relaxed">
                Price negotiation refers to the amount of data needed to account for the statistical evaluation of your model on the test dataset in order to prevent overfitting to the test set through multiple oracle calls.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By accepting this price, you agree to contribute a small, anonymized portion of your dataset as a datapoint to the shared data pool. In return, you gain the right to train your model collaboratively with other participants and benefit from their contributed data.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> What is the statistical info & hyperparameters?
            </h4>
            <div className="pl-6 space-y-2">
              <p className="text-gray-600 leading-relaxed">
                In the <span className="font-semibold text-gray-900">Statistical Information</span> section, you are required to provide an estimate of your model's expected accuracy along with the anticipated variance around that prediction.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In the <span className="font-semibold text-gray-900">Hyperparameters</span> section, you must specify the waiting period before training begins as well as the number of training rounds your model will undergo.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> Can other participants see my custom model when being trained with their data?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              Yes, the other participants will be able to see your model architecture but not your model weights.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> Will training be recorded for auditing?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              Yes.
            </p>
          </div>

          {/* Team Participation Section */}
          <div className="mt-6 mb-2">
            <h3 className="text-lg font-semibold text-blue-700 border-b border-blue-200 pb-2">
              Team Participation
            </h3>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> What is the expected team size?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              1–6 members.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> What are the expected
              outputs from participating teams?
            </h4>
            <div className="pl-6 space-y-2">
              <p className="text-gray-600 leading-relaxed">
                Participation is flexible. Teams may contribute by:
              </p>
              <ul className="text-gray-600 list-disc list-inside space-y-1">
                <li>Developing AI models</li>
                <li>
                  Providing high-quality datasets to support model development
                </li>
                <li>Or a combination of both</li>
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> Can I participate as an individual participant?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              Yes, you can participate as an individual participant.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> Can I co-train my model with other participants?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              Yes, through client recruitment you can invite other participants to co-train your model.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> Can I network with other participants?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              Yes. We encourage collaboration and networking with other teams, healthcare providers and AI researchers.
            </p>
          </div>

          {/* Judging Section */}
          <div className="mt-6 mb-2">
            <h3 className="text-lg font-semibold text-blue-700 border-b border-blue-200 pb-2">
              Judging
            </h3>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> How are the evaluation
              phases structured?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              The competition consists of a single evaluation phase. Teams are
              encouraged to iterate and submit multiple models; however, only
              the best-performing submission will be considered for the final
              leaderboard.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> How will my model be evaluated?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              Models will be evaluated on the performance metrics defined in the corresponding problem statements.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> Will the leaderboard be public and real-time?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              Yes.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> Will the judges see our data and code?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              The leaderboard is the only judge.
            </p>
          </div>

          {/* Security, Policy & Compliance Section */}
          <div className="mt-6 mb-2">
            <h3 className="text-lg font-semibold text-blue-700 border-b border-blue-200 pb-2">
              Security, Policy & Compliance
            </h3>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> Who owns the final model?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              You will continue to hold full ownership and rights over your final trained model.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> What agreements must I sign?
            </h4>
            <div className="pl-6 space-y-2">
              <ul className="text-gray-600 list-disc list-inside space-y-1">
                <li>Model evaluation agreement</li>
                <li>Data usage & anonymization declaration</li>
                <li>Platform terms of service</li>
              </ul>
            </div>
          </div>

          {/* Post Hackathon Section */}
          <div className="mt-6 mb-2">
            <h3 className="text-lg font-semibold text-blue-700 border-b border-blue-200 pb-2">
              Post Hackathon
            </h3>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> What do winners receive?
            </h4>
            <div className="pl-6 space-y-2">
              <ul className="text-gray-600 list-disc list-inside space-y-1">
                <li>Prizes</li>
                <li>Visibility on national leaderboard</li>
                <li>Potential pilots with NHA/ICMR</li>
                <li>Opportunities to publish evaluation results</li>
                <li>Mentorship for scaling</li>
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> What happens after the hackathon?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              After completion of the Hackathon, top few participants will be invited to the IIT Kanpur Campus for felicitation and prize distribution.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600">Q:</span> Is there scope for
              further audit or adoption of winning solutions?
            </h4>
            <p className="text-gray-600 pl-6 leading-relaxed">
              Yes. The potential for further auditing, benchmarking, and
              real-world adoption of winning solutions will be evaluated and
              discussed after the conclusion of the hackathon.
            </p>
          </div>

          <div className="space-y-2 mt-6 pt-4 border-t border-gray-200">
            <h4 className="text-[16px] font-medium text-gray-900 flex gap-2">
              <span className="text-blue-600"></span> For any more questions,
              mail us at:{" "}
              <a
                href="mailto:hackathon.support@nha.gov.in"
                target="_blank"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                hackathon.support@nha.gov.in
              </a>
            </h4>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
