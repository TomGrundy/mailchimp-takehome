import { addHeaderLevel } from "../src/addHeaderLevel";

describe('addHeaderLevel', () => {
    it('should add a H1 tag if 1 hash is encountered', () => {
        expect(addHeaderLevel('# test 1')).toEqual('<h1> test 1</h1>');
    });

    it('should add a H6 tag if 6 hashes are encountered', () => {
        expect(addHeaderLevel('###### test 2')).toEqual('<h6> test 2</h6>');
    });

    it('should NOT add a H tag if 0 hashes are encountered', () => {
        expect(addHeaderLevel('test 3')).toEqual('test 3');
    });
});