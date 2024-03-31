#!/usr/bin/env node
import inquirer from "inquirer"
//its a empty array inwhich our list will be add
let todos =[];
//it is for condition jab tak condition true ho gi y chaly ga
let conditions= true;
// loop to create or add more items
while(conditions){ 
let addtask = await inquirer.prompt([
    {
name :"todo",
type:"input",
message:"what you want to add inyour todo",
    },
    
{
name:"addMore",
type:"confirm",
message:"do you want to add more",
default:"false",


}
]);
//its for add items 
todos.push(addtask.todo);
//its for default value if any one says no it will work
conditions = addtask.addMore;
//its to prints our whole list
console.log(todos);
  }