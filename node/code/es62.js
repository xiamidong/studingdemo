/**
 * Created by lvjunxia on 16/11/6.
 */
// let a=[1,2,3];
// let b=[1,2,3,4,5,6];
// let d=[];

// let c=b.filter(x=>a.indexOf(x)===-1);
// console.log(c);
//
// for (let a of b){
//     console.log('a====',a);
//     console.log('b====',b);
// }

// b.splice(b.indexOf(2),1);
// console.log(b);
let a=[{
    name:'zhangsan',
    age:26},
    {
        name:'lisi',
        age:23
    }];
for(let k of a){
    if(k.age===23){
        a.splice(a.indexOf(k),1);
    }
}
console.log(a);


function sortNumber(a, b)
{
    console.log('a',a,'\n');
    console.log('b',b+'\n');
    return  a-b
}

var arr = new Array(6)
arr[0] = "10"
arr[1] = "5"
arr[2] = "40"
arr[3] = "25"
arr[4] = "1000"
arr[5] = "1"

arr.sort(sortNumber);


