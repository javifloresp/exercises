const { find } = require("./controller/find-card");

const input_1 = [1, 2, 3, 23, 5, 6, 8];

const input_2 = [5, 15, 10, 78, 23, 90, 23, 56];

const examples = [
    {
        input_1,
        input_2,
        find: 7,
        expect: [2 , 5]
    },
    {
        input_1,
        input_2,
        find: 4,
        expect: [1 ,5]
    },
    {
        input_1,
        input_2,
        find: 14,
        expect: [3 , 10]
    },
    {
        input_1,
        input_2,
        find: 16,
        expect: [1 ,15]
    },
    {
        input_1,
        input_2,
        find: 99,
        expect: [8 , 90]
    }
];


test('checking if array input_1 is correct', () => {
    expect(input_1).toContain(23);
});

test('checking if array input_2 is correct', () => {
    expect(input_2).toContain(90);
});

test('checking if our examples object is correct using position 3', () => {
    expect(examples[3]).toEqual({input_1 , input_2 , find: 16 , expect: [1 ,15]});
});

test('checking our function find using our example object using position 3' , () => {
    expect(find(examples[3])).toStrictEqual([1,15])
})

test('checking our function find using our example object with for..of ' , () => {
    for(let item of examples) expect(find(item)).toStrictEqual(item.expect)
})