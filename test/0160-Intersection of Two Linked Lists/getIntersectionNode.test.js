const assert = require('assert');
const getIntersectionNode1 = require('../../src/0160-Intersection of Two Linked Lists/getIntersectionNode1');
const getIntersectionNode2 = require('../../src/0160-Intersection of Two Linked Lists/getIntersectionNode2');
const getIntersectionNode3 = require('../../src/0160-Intersection of Two Linked Lists/getIntersectionNode3');

describe('#0160-Intersection of Two Linked Lists', () => {
    [getIntersectionNode1, getIntersectionNode2, getIntersectionNode3].forEach(
        (getIntersectionNode, index) => {
            describe(`#getIntersectionNode${index + 1}`, () => {
                it('should return null when no intersection', () => {
                    const list1 = null;
                    const list2 = { val: 1, next: null };
                    assert.strictEqual(getIntersectionNode(list1, list2), null);
                });

                it('should return intersection node of two given list', () => {
                    const list1 = { val: 1, next: { val: 3, next: { val: 6, next: null } } };
                    const list2 = { val: 2, next: { val: 4, next: list1.next } };
                    assert.strictEqual(getIntersectionNode(list1, list2), list1.next);

                    const list3 = { val: 1, next: { val: 3, next: { val: 6, next: null } } };
                    const list4 = { val: 2, next: { val: 4, next: null } };
                    assert.strictEqual(getIntersectionNode(list3, list4), null);
                });
            });
        },
    );
});
