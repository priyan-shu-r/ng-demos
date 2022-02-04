// Everthing in javaScript goes inside Global Execution Context

// var x = 2;

// function square(num)
// {
//     var ans = num*num;
//     console.log(ans); 
// }

// var square1 = square(5);
// var square3 = square(4);

// call stack

// function f1()
// {
//     console.log("Hi this is f1");
// }
// function f2()
// {
//     f1();
//     console.log("Hi this is f2");
// }

// f2();
// f1();

//Hoisting

// myfunction();
// console.log(x);

// var x =7;
// function myfunction()
// {
//     console.log("I am Priyanshu");
// }

//function invokation and variable environment

// var x=1;
// a();
// b();
// console.log(x);

// function a()
// {
//     var x =10;
//     console.log(x);
// }

// function b()
// {
//     var x= 20;
//     console.log(x);
// }

// windows and this object

// var x =10;
//  function a()
//  {
//      var a =20;
//  }
//  console.log(window.x);
//  console.log(x);
//  console.log(this.x);

// lexical environment

// function a()
// {
//     var b=10;
//     c();
//     function c()
//     {
//         console.log(b);
//     }
// }
// a();

//Shadowing
// var z =10;

// {
//     var z =2;
//     const a=3;
//     let b=6;
//     console.log(z);
//     console.log(a);
//     console.log(b);
// }

// console.log(z);

// Array Method


