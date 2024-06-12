const mockAddHeaderLevel = jest.fn();
jest.mock('../src/addHeaderLevel', () => {
    return {
        addHeaderLevel: mockAddHeaderLevel
    }
});
const mockAddPTags = jest.fn();
jest.mock('../src/addPTags', () => {
    return {
        addPTags: mockAddPTags
    }
});
const mockUrlEncodeLine = jest.fn();
jest.mock('../src/urlEncodeLine', () => {
    return {
        urlEncodeLine: mockUrlEncodeLine
    }
});

import { mdToHtml } from "../src/mdToHtml";

describe('mdToHtml', () => {
    it('should call addHeaderLevel & urlEncodeLine if # in line.', () => {
        mdToHtml('## Here\'s a line!');

        expect(mockAddHeaderLevel).toHaveBeenCalled();
        expect(mockUrlEncodeLine).toHaveBeenCalled();
    });

    it('should call addPTags & urlEncodeLine if no # in line', () => {
        mdToHtml('Here\'s a line!');

        expect(mockAddPTags).toHaveBeenCalled();
        expect(mockUrlEncodeLine).toHaveBeenCalled();
    });

    it('should return an empty string if empty line.', () => {
        expect(mdToHtml('')).toEqual('');
    });
});