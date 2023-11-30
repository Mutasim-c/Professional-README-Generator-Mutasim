// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is your projects title?"',
    },
    {
    type: 'input',
    name: 'description',
    message: 'What is your desciption?',
    },
    {
    type: 'input',
    name: 'installation',
    message: 'What is your installation instructions?',
    },
    {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information?',
    },
    {
    type: 'input',
    name: 'contributing',
    message: 'What is the contribution Guidlines?',
    },
    {
    type: 'input',
    name: 'tests',
    message: 'What are the test instruction?',
    }
];
// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    const { title, description, installation, usage, contributing, tests } = data
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Successfully created README')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile("README.md", answers);
    })
}

// Function call to initialize app
init();
