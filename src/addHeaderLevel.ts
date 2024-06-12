// counts the number of hashes, and uses that to set what number H tag it is. Then returns that H tag.
export const addHeaderLevel = (line: string): string => {
    const hashCount = line.slice(0, 6).lastIndexOf('#') + 1;
    if (hashCount > 0) {
        return `<h${hashCount}>${line.slice(hashCount)}</h${hashCount}>`;
    }
    return line;
};