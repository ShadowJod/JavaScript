// function sayhello(){
//     console.log("HellO JavaScript");
    
// }

// sayhello();

// function add(a,b) {
//     return a+b
// }

// console.log(add(10,12));

// function greeting(name = "Nikhil"){
//     console.log(`Hi ${name}`);
    
// }

// greeting();

    // function addUnlimited(...val){
        
    //     let sum = val.reduce((acc,cur)=>{
    //         return acc + cur;
    //     },0)
    //     return sum;
    // }

    // console.log(addUnlimited(1,2,3,4,5,6,7,8,9,10));

// (function(){
//     console.log('This is IIFe');
    
// })();


// function abc(){
//     let a = 10;
//      function child(){
//         console.log(a);
        
//      }
//      child();
// }

// abc();

// let fruits = ["apple", "bananan", "mango"];
// fruits.push("Papaya")
// fruits.unshift("Orange");
// console.log(fruits);


// let arr = [1,2,3,4,5,6,7];

// arr.forEach((i)=>{
//     console.log(i);
// })

let obj = {
    name : "nikhil",
    age :10,

}

for(let key in obj){
    console.log(obj[key]);
    
}