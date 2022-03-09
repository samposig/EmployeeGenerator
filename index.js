const {prompt} = require('inquirer');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const employee = require('./lib/employee');
const fs = require("fs");

const managerPrompt = [
    {
        message: "What is the manager's name?",
        name: "name",
        type: "input"
    },
    {
        message: "What is the manager's id number?",
        name: "id",
        type: "input"
    },
    {
        message: "What is the manager's email?",
        name: "email",
        type: "input"
    },
    {
        message: "What is the manager's office number?",
        name: "officeNumber",
        type: "input"
    }
];

const employeePrompt = [
    {
        message: "What is the role of the employee you want to add?",
        name: "role",
        type: "list",
        choices: ["Engineer", "Intern"]
    },
    {
        //callback for answers given before
        message: (answers)=> `What is the name of the ${answers.role}?`,
        name: "name",
    },
    {
        message: (answers)=> `What is the Id of the ${answers.role}?`,
        name: "id",
    },
    {
        message: (answers)=> `What is the email of the ${answers.role}?`,
        name: "email",
    },
    {
        message: (answers)=> {
            if(answers.role === 'Engineer') return 'What is the github name of the engineer?'
            return 'What is the school this intern graduated from?'
        },
        name: "extra",
    }
]

const employees = []

function addEmployee(){
    prompt({
        message: 'What do you want to do?',
        type: 'list',
        name: 'choice',
        choices: ['Add an Employee', "Create roster"]
     }).then(data => {
         console.log("Your choice", data.choice);
         if(data.choice === "Add an Employee"){
             prompt(employeePrompt)
            .then(data => {
                 console.log('answers for employee --', data);
                 if(data.role === "Engineer"){
                     const emp = new Engineer(data.name, data.id, data.email, data.extra);
                     employees.push(emp)
                 } else {
                     const emp = new Intern(data.name, data.id, data.email, data.extra);
                    employees.push(emp)
                }
                console.log(`${data.role} added to team!`);
                setTimeout(addEmployee, 1500);
             })
         }else{
              createHTML()
         }
      })
}

function createHTML(){
    console.log("creating html");
    console.log("All your emplyees --", employees);
    
    const HTML =
    `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <nav>
        Team
    </nav>
    <body>
        <div class="container">
            ${employees.map(employee => employee.generateHTMLCard(employee.officeNumber || employee.github || employee.school)).join("\n")}
        </div>
    </body>
    <script src="bootstrap/js/bootstrap.min.js"></script>
    </html>
        `
        //fs creates the HTML file after string is created
        fs.writeFileSync("./dist/output.html", HTML);
        console.log("All done, check for the html that was created")
}

function main(){

    //create manager first
    prompt(managerPrompt).then(data => {
        console.log(data);
//create new manager using infor from inquirer
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        employees.push(manager);
        //manager created, now ask if want to add another
        addEmployee();
    })
}
main();