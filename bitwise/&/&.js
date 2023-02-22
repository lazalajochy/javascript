var a = 7, b = 6;

bitwise(a, b);

function bitwise(a,b){
    console.log(a.toString(2), " ", b.toString(2));
    /*
    111 & 110 ==> en base a binario el resultado es 110, en base a decimal el resultado es 6
    */
    console.log(a & b)
}