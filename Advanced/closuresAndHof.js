
//basic example for closure
function trackLogin(){
    loginAttempts=0;
    return function(){
        loginAttempts++;
        if (loginAttempts > 3) {
            alert("Too many login attempts. Please try again later.");
        }
    }
}

let trackLogin=trackLogin();
trackLogin(); // login attempt 1
trackLogin();   

// In the above example it will remember the login Attempts Value even it is out of scope and execution is completed

// Task: Implement a function createMultiplier that takes a number x and returns a new function. This new function should take a number y and return the product of x and y.

function createMultiplier(x){
    return function(y){
        console.log(x + ' * ' + y + ' = ' + x*y);
    }
}

let fiveTable=createMultiplier(5);
fiveTable(1);
fiveTable(2);
fiveTable(3);
fiveTable(4);
fiveTable(5);
fiveTable(6);
fiveTable(7);
fiveTable(8);
fiveTable(9);
fiveTable(10);



function counter(){
    let count=0;

    let increment=function (){
        count++;
    }
    let decrement=function (){
        count--;
    }
    let getResult= function (){
        return count;
    }

    return {increment,decrement,getResult}

}

// This closure is used to remember the value of varibles in its lexical scope even after the function execution is completed
let {increment,decrement,getResult}=counter();

increment();
increment();
decrement();
increment();
getResult();




