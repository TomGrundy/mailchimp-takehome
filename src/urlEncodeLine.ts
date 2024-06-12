export const urlEncodeLine = (line: string): string => {
    
    const openSquare = line.indexOf('[');
    const closeSquare = line.indexOf(']');
    const openRound = line.indexOf('(');
    const closeRound = line.indexOf(')');
    const checkAscOrder = [
        openSquare,
        closeSquare,
        openRound,
        closeRound
    ];

    if (checkAscOrder.includes(-1)) {
        return line;
    }

    // Checks if the brackets are in the correct order to denote a markdown link.
    const isAsc = checkAscOrder.slice(1).every((item, index) => {
        return item > checkAscOrder[index];
    });

    // Constructs a link if the brackets are in the correct order, and calls itself again on the remainder of the line, for if there are multiple links one after another in the line.
    if (isAsc && closeSquare + 1 === openRound) {
        return `${line.slice(0, openSquare)}<a href="${line.slice(openRound + 1, closeRound)}">${line.slice(openSquare + 1, closeSquare)}</a>${urlEncodeLine(line.slice(closeRound + 1))}`;
    }
    // Call this function on itself for the remainder of the string to ensure a malformed link doesn't stop subsequent correctly formed links from rendering.
    return `${line.slice(0, closeRound + 1)}${urlEncodeLine(line.slice(closeRound + 1))}`;
};