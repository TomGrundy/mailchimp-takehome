// Wraps an arbitrary line in p tags.
export const addPTags = (line: string): string => {
    if (line.length) {
        return `<p>${line}</p>`;
    }
    return line;
};