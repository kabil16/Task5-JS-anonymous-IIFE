// let total =[10,20,70,65,55];
// let sum =0;
// total.forEach((item)=>{
//     sum =sum+item
// })
// console.log(sum)

let total =[10,20,70,65,55];

let totalSum=total.reduce((prvio,curr)=>{
    console.log(prvio+" "+curr);
    return prvio+curr
},0)