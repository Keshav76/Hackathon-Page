/**
 * Utility function to convert a comma-separated image vector string
 * into a displayable base64 image URL.
 *
 * The image vector contains grayscale pixel values (0-255) that represent
 * a flattened 2D image.
 */

/**
 * Converts an image vector string to a base64 data URL
 * @param vectorString - Comma-separated string of pixel values (0-255)
 * @param width - Optional width of the image (if not provided, assumes square image)
 * @param height - Optional height of the image (if not provided, assumes square image)
 * @returns base64 data URL that can be used as img src
 */
export const vectorToImageUrl = (
    vectorString: string,
    width?: number,
    height?: number
): string => {
    // Parse the comma-separated string into an array of numbers
    const pixels = vectorString.split(",").map((val) => parseInt(val.trim(), 10));

    // If dimensions not provided, calculate assuming a square image
    const totalPixels = pixels.length;
    const calculatedSize = Math.sqrt(totalPixels);

    const imgWidth = width || Math.floor(calculatedSize);
    const imgHeight = height || Math.floor(calculatedSize);

    // Create an off-screen canvas
    const canvas = document.createElement("canvas");
    canvas.width = imgWidth;
    canvas.height = imgHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
        console.error("Failed to get canvas context");
        return "";
    }

    // Create ImageData object
    const imageData = ctx.createImageData(imgWidth, imgHeight);
    const data = imageData.data;

    // Fill the ImageData with pixel values
    // Each pixel in ImageData has 4 values: R, G, B, A
    for (let i = 0; i < pixels.length && i < imgWidth * imgHeight; i++) {
        const pixelValue = Math.min(255, Math.max(0, pixels[i] || 0));
        const idx = i * 4;
        // For grayscale, set R, G, B to the same value
        data[idx] = pixelValue; // R
        data[idx + 1] = pixelValue; // G
        data[idx + 2] = pixelValue; // B
        data[idx + 3] = 255; // A (fully opaque)
    }

    // Put the image data on the canvas
    ctx.putImageData(imageData, 0, 0);

    // Convert canvas to base64 data URL
    return canvas.toDataURL("image/png");
};

/**
 * Parses CSV content and returns an array of objects
 * @param csvContent - Raw CSV string content
 * @returns Array of parsed row objects
 */
export const parseCSV = (
    csvContent: string
): Array<{ image_vector: string; cataract_type: string }> => {
    const lines = csvContent.trim().split("\n");

    if (lines.length < 2) {
        return [];
    }

    // Skip header row
    const dataRows = lines.slice(1);

    return dataRows.map((line) => {
        // The CSV format is: "image_vector",Cataract Type
        // The image_vector is quoted and contains commas
        // Find the last comma that separates the vector from the type

        // Handle the case where image_vector is quoted
        let imageVector: string;
        let cataractType: string;

        if (line.startsWith('"')) {
            // Find the closing quote
            const closingQuoteIndex = line.indexOf('",', 1);
            if (closingQuoteIndex !== -1) {
                imageVector = line.substring(1, closingQuoteIndex);
                cataractType = line.substring(closingQuoteIndex + 2).trim();
            } else {
                // Fallback: maybe the quote is at the very end
                const lastQuoteIndex = line.lastIndexOf('"');
                imageVector = line.substring(1, lastQuoteIndex);
                cataractType = line.substring(lastQuoteIndex + 2).trim();
            }
        } else {
            // No quotes, use simple split (shouldn't happen with this data)
            const lastCommaIndex = line.lastIndexOf(",");
            imageVector = line.substring(0, lastCommaIndex);
            cataractType = line.substring(lastCommaIndex + 1).trim();
        }

        return {
            image_vector: imageVector,
            cataract_type: cataractType,
        };
    });
};

/**
 * Component-friendly hook data type
 */
export interface CataractSample {
    id: number;
    vector: string;
    vectorPreview: string;
    type: string;
    imageUrl: string;
}

/**
 * Transforms parsed CSV data into component-ready format
 * @param parsedData - Parsed CSV data
 * @param limit - Number of samples to return
 * @returns Array of CataractSample objects
 */
export const transformToSamples = (
    parsedData: Array<{ image_vector: string; cataract_type: string }>,
    limit: number = 5
): CataractSample[] => {
    return parsedData.slice(0, limit).map((row, index) => {
        const vectorPreview =
            row.image_vector.split(",").slice(0, 7).join(", ") + "...";

        return {
            id: index,
            vector: row.image_vector,
            vectorPreview,
            type: row.cataract_type,
            imageUrl: vectorToImageUrl(row.image_vector),
        };
    });
};
