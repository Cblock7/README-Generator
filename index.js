const inquirer = require("inquirer");
const fs = require("fs");



inquirer
.prompt([
{
    type: "input",
    message: "What is your Github username?",
    name: "username",
},
{
    type: "input",
    message: "What is your email address?",
    name: "email",
},
{
    type: "input",                
    message: "What is your project's name?",
    name: "projectname",
},
{
    type: "input",            
    message: "Please describe your project!",
    name: "description",
},
{
    type: "list",
    message: "What kind of license does your project have?",
    choices: ["Modified-BSD", "MIT", "CCO-1.0-only", "None"],
    name: "license",
},
{
    type: "input",            
    message: "What command should be run to install dependencies?",
    name: "dependencies",
},
{
    type: "input",            
    message: "What command should be run to run tests?",
    name: "tests",
},
{
    type: "input",            
    message: "What does the user need to know about using this repo?",
    name: "repoinfo",
},
{
    type: "input",            
    message: "What does the user need to know about contributing to this repo?",
    name: "repocontribute",
},
{
    type: "input",            
    message: "What questions might the user have?",
    name: "questions",
},
])
.then((response) => {
    const readmetemplate = `# ${response.projectname}
## Description 
> ${response.description} 

## Table of Contents 
1. [Installation](#installation) 
2. [Usage](#usage) 
3. [License](#license) 
4. [Contributing](#contributing) 
5. [Test](#tests)
6. [Questions](#questions)
7. [Contact](#contact) 

## Installation <a name="installation"></a>
In order to install required dependencies, run the following command:
> ${response.dependencies} 

## Usage 
${response.repoinfo} 

## License 
${response.license} 

## Contributing 
${response.repocontribute} 

## Tests 
To run tests, use the following command:
> ${response.tests} 

## Questions 
${response.questions}

### Contact
Github: ${response.username}
Email: ${response.email}    

    `;

    fs.writeFile("README.md", readmetemplate, (error) => {
        error ? console.log(error) : console.log("File Created")
    });
});

