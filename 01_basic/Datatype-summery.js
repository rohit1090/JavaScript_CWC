// primitive data type

/* 
  7 types: String,Number<boolean,null,undefined,symbol,bigint
*/

// Refrence type (non primitive)

/*
  // Arrays,objects,functions
*/

/// symbol ex

const id = Symbol('123')
const anotherid=Symbol('123')

console.log(id===anotherid); // false

 
const hero=["saktiman" ,"krish" ,"doga" ]// arrays
const myObj={
    name:"hitesh",
    age:25
}// objets 

const myFunction=function (){
    console.log("hello");
    
} // function 
myFunction();  // function call 

console.log(typeof id) // Symbol

/*

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function (Object Function)
       Object  =>  object
       
       */


