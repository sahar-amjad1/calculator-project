/*import inquirer from "inquirer";



   function main() {

       inquirer
       .prompt([
         {
           type :'input',
           name: "num1",
           message :"enter the first number"
         },

       {
          type :'input',
           name: "num2",
           message :"enter the second number"
       },
       {
           pe :'list',
           name: "operation",
           choice: ['+' ,'-', '*' ,'/'],
           message :"enter the first number"
       }
       ])
       .then((answer: any) => {

           console.log(answer)
         // Use user feedback for... whatever!!
       })
       .catch((error: { isTtyError: any; }) => {
         if (error.isTtyError) {
           // Prompt couldn't be rendered in the current environment
         } else {
           // Something else went wrong
         }
       });

   let num1 =5;
   let num2 = 10;
   let operation = "+";
   if (operation =="+") {
       sum(num1 ,num2);
   } else if (operation =="-") {
       subtract(num1 , num2);

   }
else if (operation == "*") {
   multiply (num1 , num2)
}
else if (operation == "/") {
   division(num1, num2);
}
else {
   console.log('invalid Operation')
}
}

function sum(num1 : number , num2: number) {
   const result = num1 + num2;

console.log("sum" ,result);
}



function subtract(num1 : number , num2: number) {
   const result = num1 - num2;

console.log("subtraction" ,result);
}


function multiply(num1 : number , num2: number) {
   const result = num1  * num2;

console.log("multiply" ,result);
}

function division (num1 : number , num2: number) {
   const result = num1 / num2;

console.log("division" ,result);
}

main();*/
import inquirer from "inquirer";
function main() {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number',
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number',
        },
        {
            type: 'list',
            name: 'operation',
            choices: ['+', '-', '*', '/'],
            message: 'Select the operation',
        },
    ])
        .then((answer) => {
        console.log(answer);
        performOperation(answer);
    })
        .catch((error) => {
        if (error.isTtyError) {
            console.log('Prompt couldn\'t be rendered in the current environment');
        }
        else {
            console.log('Something else went wrong');
        }
    });
}
function performOperation(answer) {
    const num1 = parseFloat(answer.num1);
    const num2 = parseFloat(answer.num2);
    switch (answer.operation) {
        case '+':
            sum(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            division(num1, num2);
            break;
        default:
            console.log('Invalid Operation');
    }
}
function sum(num1, num2) {
    const result = num1 + num2;
    console.log('Sum:', result);
}
function subtract(num1, num2) {
    const result = num1 - num2;
    console.log('Subtraction:', result);
}
function multiply(num1, num2) {
    const result = num1 * num2;
    console.log('Multiplication:', result);
}
function division(num1, num2) {
    const result = num1 / num2;
    console.log('Division:', result);
}
main();
