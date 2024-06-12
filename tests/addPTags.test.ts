import { addHeaderLevel } from "../src/addHeaderLevel";
import { addPTags } from "../src/addPTags";

describe('addPTags', () => {
    it('should add a p tag if passed a string', () => {
        expect(addPTags('test 1')).toEqual('<p>test 1</p>');
    });

    it('should NOT add a p tag if an empty string is passed in', () => {
        expect(addHeaderLevel('')).toEqual('');
    });
});