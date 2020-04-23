const assert = require('assert');
const myAtoi = require('../../src/0008-String to Integer (atoi)/myAtoi');

describe('#0008-String to Integer (atoi)/myAtoi', () => {
    it('should return 0 when can not parse', () => {
        assert.strictEqual(myAtoi(' '), 0);
        assert.strictEqual(myAtoi('  a11'), 0);
    });

    it('should return the parsed integer', () => {
        assert.strictEqual(myAtoi('123'), 123);
        assert.strictEqual(myAtoi('  123'), 123);
        assert.strictEqual(myAtoi('  +123'), 123);
        assert.strictEqual(myAtoi('  -123'), -123);
        assert.strictEqual(myAtoi('  123 aaaa'), 123);
    });
});
