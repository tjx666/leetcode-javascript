const assert = require('assert');
const canWinNim = require('../../src/0292-Nim Game/canWinNim');

describe('#0292-Nim Game', () => {
    it('should return weather can win the Nim game', () => {
        assert.strictEqual(canWinNim(1), true);
        assert.strictEqual(canWinNim(2), true);
        assert.strictEqual(canWinNim(3), true);
        assert.strictEqual(canWinNim(4), false);
        assert.strictEqual(canWinNim(7), true);
        assert.strictEqual(canWinNim(12), false);
    });
});
