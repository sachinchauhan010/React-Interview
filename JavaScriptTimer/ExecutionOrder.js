console.log(1)
setTimeout(()=> console.log(2), 0);
Promise.resolve().then(()=> console.log(3));
console.log(4)
// 1 4 3 2 


//Nested setTimeout
setTimeout(()=>{
  console.log("First");
  setTimeout(()=> console.log("Second"),1000)
},3000)