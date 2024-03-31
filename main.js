import inquirer from "inquirer";
let todos = [];
let conditions = true;
while (conditions) {
    let addtask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what you want to add inyour todo",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "do you want to add more",
            default: "false",
        }
    ]);
    todos.push(addtask.todo);
    conditions = addtask.addMore;
    console.log(todos);
}
