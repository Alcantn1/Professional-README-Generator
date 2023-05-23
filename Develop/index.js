// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path =require('path');
const generateMarkDown = require('utils/generateMarkDown');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input'  ,
    name: 'github'  ,
    message:'what is your github username?',
},
{
    type: 'input'  ,
    name: 'email'  ,
    message:'what is your email',
},
{
    type: 'input'  ,
    name:  'title' ,
    message: ' what is the title of your project?',
},
{
    type:  'input' ,
    name:  'description' ,
    message:'give a description of your project',
},
{
    type: 'input'  ,
    name: 'installation' ,
    message:'what do you need to do to install this project?',
},
{
    type: 'input'  ,
    name: 'usage'  ,
    message:'what is your project used for?',
},
{
    type: 'input'  ,
    name: 'license'  ,
    message:'what type of license does your project have?',
},
{
    type: 'input' ,
    name: 'tests' ,
    message: 'how do you run tests on this project?' ,
},
{
    type: 'input' ,
    name: 'contributors' ,
    message: 'who contributed to your project?' ,
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const outputPath = path.join(process.cwd(), fileName);
    fs.writeFile(outputPath, data, (err) => {
      if (err) {
        console.error('An error occurred while writing the file:', err);
      } else {
        console.log('README file created successfully!');
      }
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const markdown = generateMarkdown(data);
        writeToFile('README.md', markdown);
      });
}

// Function call to initialize app
init();
