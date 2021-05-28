let a =[1,2,3,4,5,6,7,8,9,10,11];

let resultAnony =[];
let resultIIFE =[];
//Anonymous Function
const resultAnonymous = () =>{
    a.forEach((e)=>{
        if(e%2 !== 0){
            resultAnony.push(e);
        }
    });
}
resultAnonymous();
console.log(resultAnony);

//IIFE Function
const resulltIIFE = ( function(){
    a.forEach((e)=>{
        if(e%2 !== 0){
            resultIIFE.push(e);
        }
    });
    console.log(resultIIFE)
})();