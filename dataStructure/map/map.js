const map = new Map([['a',1],['b',2]]);
map.set('c',3)

console.log(map.has('c'))
console.log(map.get('a'))
console.log(map.size);


for(const [key,value] of map){
    console.log(`${key}: ${value}`)
}

const iterator = map.keys();
for(let i = 1; i <= map.size; i++){
    console.log(iterator.next().value)

}

const keysValue = map.entries();

for(let j = 1; j <= map.size; j++){
    console.log(keysValue.next().value)
}
