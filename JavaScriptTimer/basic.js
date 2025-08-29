
// Case 1: Execute After a Delay

//It executes after 1 sec Delay
setTimeout(()=>{
  console.log("Hello Programmer")
}, 1000);


// It executes after each 1 seconds delay until clearInterval is called
let firstInterval=setInterval(()=>{
  console.log("Interval")
}, 1000)

setTimeout(()=>{
  clearInterval(firstInterval)
},5000)



// Case 2: Zero Delay

console.log("Start1");
setTimeout(()=> console.log("Inside Timeout"),0);
console.log("End1");


// Negative Delay Pass
setTimeout(()=> console.log("Negative Time"), -1000)


// Case 4: Loops and Closures
for(var i=1; i<=3; i++){
  setTimeout(()=> console.log(i),1000)
}                      // print 4 4 4

for(let i=1; i<=3; i++){
  setTimeout(()=>console.log(i),2000)
}                     // print 1 2 3

//fix with clousers
for (var i = 1; i <= 3; i++) {
  setTimeout(
    (
      (x) => () =>
        console.log(x)
    )(i),
    2000
  );
}

