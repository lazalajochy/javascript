var n = 22;
function countDown(n) {
    if (n == 0) {
        return console.log(0);
    } else {
        console.log(n)
        return countDown(n - 1);
    }

}
countDown(n);
