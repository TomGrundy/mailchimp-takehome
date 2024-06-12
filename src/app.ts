import { open } from 'node:fs/promises';
import { mdToHtml } from './mdToHtml';

export const main = async () => {
    const inputFile = await open('./markdownInput.md');
    const outputFile = await open('./htmlOutput.html', 'w');
    // For each line in the file...
    for await (const line of inputFile.readLines()) {
        // trim whitespace, run it through the encoder function, and write the line to the output file.
        await outputFile.write(`${mdToHtml(line.trim())}\r\n`);
    }
};

main();