const sort = (a,b) => a - b;

const findCard = ( { input_1 , input_2 , find } ) => {
    let diff = 0;

    let MAX_VALUE = Number.MAX_VALUE;

    input_1.sort(sort);
    input_2.sort(sort);

    let input_1_Length = input_1.length;
    let input_2_Length = input_2.length;

    let a = 0;
    let x = input_1_Length;
    let b = input_2_Length - 1;

    let index_1  , index_2;

    while(a < x && b >= 0) {
        diff = Math.abs(input_1[a] + input_2[b] - find);
        // console.log(`input ${input_1[a]} + ${input_2[b]} - ${find} = ${diff} AND MAX_VALUE ${MAX_VALUE}`);
        if(diff < MAX_VALUE){
            index_1 = a;
            index_2 = b;
            MAX_VALUE = diff;
        }

        (input_1[a] + input_2[b]) > find ? b-- : a++
    }

    // console.log(`a: ${input_1[index_1]} b: ${input_2[index_2]} find ${find}`);
    return [input_1[index_1] , input_2[index_2]];
};


module.exports = {
    sort,
    find : findCard
};