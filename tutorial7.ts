/* it will display 0 1 2 3 4 5. which is fine*/
for(var i=0; i<6;i++){
  console.log(i)
}

/* if we want to display after 1 sec. then we get value 6 six times*/
for(var i=0; i<6;i++){
 setTimeout(function(){
   console.log(i)
 },1000)
}

/*for that reason we use let keyword in for loop or we can use IIFE it will display 0 1 2 3 4 5. which is fine*/
for(let i=0; i<6;i++){
  setTimeout(function(){
    console.log(i)
  },1000)
 }