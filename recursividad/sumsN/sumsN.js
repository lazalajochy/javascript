var n = 5, sum = 0;

function sumNums(n){
    if(n == 0){
        return sum;
    }else{
        sum += n;
      return  sumNums(n-1)
    }
}
sumNums(n);
