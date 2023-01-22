let countClicks = 1;

function clicks(){
    document.getElementById("number-clicks").innerHTML = `Numbers of clicks: ${countClicks++}`
}

const compute = (num) => {
    let limet = 17000
    for(let i = 0; i < limet; i++){
        for(let j = 0; j < limet; j++){
            num **= 2;
           num =  Math.sqrt(2);
        }
    }
    return num
}

function slow(){
    console.time();
    console.log(compute(4));
    console.timeEnd();
}