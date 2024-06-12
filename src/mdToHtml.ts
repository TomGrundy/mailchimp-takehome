import { addHeaderLevel } from './addHeaderLevel';
import { addPTags } from './addPTags';
import { urlEncodeLine } from "./urlEncodeLine";

// Checks the first character in the line and call the appropriate function.
export const mdToHtml = (line: string): string => {
    switch (line?.[0]) {
        case '#': {
            return addHeaderLevel(urlEncodeLine(line));
        }
        case undefined: {
            return '';
        }
        default: {
           return addPTags(urlEncodeLine(line));
        }
    };
};
