// তুমি আমার অনেখ শখের খুজে পাওয়া এক প্রজাপতি নীল
// const not allow to assign
// let allow to reassign


// default peramiter
function add(first = 0, second = 0){
    const total = first + second;
    return total;
} 

const result = add( 20)
console.log(result)