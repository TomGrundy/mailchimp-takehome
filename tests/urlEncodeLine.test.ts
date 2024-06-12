import { urlEncodeLine } from "../src/urlEncodeLine";

describe('urlEncodeLine', () => {
    it('should url encode a properly formed markdown link', () => {
        expect(urlEncodeLine('#headerWontGetEncoded [but a link will](https://max.com)')).toEqual('#headerWontGetEncoded <a href="https://max.com">but a link will</a>');
    });

    it('should url encode multiple properly formed markdown links in succession', () => {
        expect(urlEncodeLine('#headerWontGetEncoded [but a link will](https://max.com) [another one](https://thomasgrundy.com) [third](https://github.com)')).toEqual('#headerWontGetEncoded <a href="https://max.com">but a link will</a> <a href="https://thomasgrundy.com">another one</a> <a href="https://github.com">third</a>');
    });
    it('should NOT url encode a malformed markdown link', () => {
        expect(urlEncodeLine('[link me please] words should not be here (https://max.com)')).toEqual('[link me please] words should not be here (https://max.com)');
    });
    it('should NOT url encode a malformed markdown link, but encode correctly formed ones after the malformed one', () => {
        expect(urlEncodeLine('[link me please] words should not be here (https://max.com)[I\'m a good link!](https://google.com)')).toEqual('[link me please] words should not be here (https://max.com)<a href="https://google.com">I\'m a good link!</a>');
    });
});