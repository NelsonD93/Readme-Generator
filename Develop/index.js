// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')
const path = require('path')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide the description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will your application be used?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions for your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select your desired license',
        choices: ['MIT','Mozilla','ISC','No license']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your github profile name',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=>{
    console.log(answers)
    var readme = generateMarkdown(answers)
    console.log(readme)
    fs.writeFile(path.join(__dirname,'./Output/README.md'),readme,(err)=>{
        if(err) {
            console.log(err)
            return
        }
        console.log('Successfully generated readme!')
    })
    })
}

// Function call to initialize app
init();
