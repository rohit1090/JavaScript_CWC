// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);


// console.log("2">1); // true
// console.log("02">1);// true

console.log(null>0); // false converted null to 0
console.log(null==0); // false // its not convert the null
console.log(null>=0); // true converted null to 0

// the reason is that an eqaulity check == and comparisons ><>=<= works diffrently. 
// comparisons covert null to a number , treatinng is as 0.
//  thats why u(3) null>=0 is truu and (1)null>0 is false 


console.log(undefined==0);// false 

// strick check 

console.log("2"===2); // false (===) check strict check is compaire the data type 



//******** We need to avoid this type of convertion */



