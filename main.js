const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const input1 = document.getElementById("input-1")
const input2 = document.getElementById("input-2")
const result = document.querySelector(".result");

add.addEventListener("click",function(){
   
      value1 = Number(input1.value);
      value2 = Number(input2.value);
   
      result.innerHTML = Number(value1+value2);
       
})
sub.addEventListener("click",function(){
   
    value1 = Number(input1.value);
    value2 = Number(input2.value);
 
    result.innerHTML = Number(value1-value2);
     
})
multiply.addEventListener("click",function(){
   
    value1 = Number(input1.value);
    value2 = Number(input2.value);
 
    result.innerHTML = Number(value1*value2);
     
})

divide.addEventListener("click",function(){
   
    value1 = Number(input1.value);
    value2 = Number(input2.value);
    if(value2 == 0){
        alert("value cannot be 0")
    }
    result.innerHTML = Number(value1/value2);
     
})