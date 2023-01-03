class OpendedClosed{
     
    //the first method is getSum of the values, which are x and y
    getSum = (x,y) => {
        return x + y;
    };

    //the second method is getMulti of the values, which are x and y, so the second methos was added  without modify the 
    //previous method getSum

    getMulti = (x, y) => {
        return x * y;
    };
}

const opendedClosed = new OpendedClosed();

console.log(opendedClosed.getSum(25,5));
console.log(opendedClosed.getMulti(25,5));