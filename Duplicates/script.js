// let dublicate =['kabil','iyapan','manoj','pirasanna','manoj','iyapan'];
// const newArr=dublicate.filter((item)=>{
//     return item!=="kabil"
// })
// console.log(newArr);

let dublicate =['kabil','iyapan','manoj','pirasanna','manoj','iyapan'];
const count1 = {};
let resultDub=[]
const resultAnonymous = () =>{
    dublicate.forEach(item => {
        if (count1[item]) {
           count1[item] +=1
           return
        }
        count1[item] = 1
    })
    
    for (let prop in count1){
        if (count1[prop] >=2){
            resultDub.push(prop)
        }
    }
}
resultAnonymous();
console.log(resultDub)
//endd
// const items2 = ['kabil','iyapan','manoj','pirasanna','manoj','iyapan']

// function find_duplicate_in_array(array){
// const count = {}
// const result = []

// array.forEach(item => {
//     if (count[item]) {
//        count[item] +=1
//        return
//     }
//     count[item] = 1
// })

// for (let prop in count){
//     if (count[prop] >=2){
//         result.push(prop)
//     }
// }

// console.log(result)
// return result;

// }

// find_duplicate_in_array(items2)
// {pencil: 2, book: 1}
//[pencil