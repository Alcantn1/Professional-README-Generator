const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// array of questions for user input
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
;

function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license !== 'None') {
    return `License: [${license}](LICENSE.md)`;
  }
  return '';
}

function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  if (licenseBadge || licenseLink) {
    return `
  ## License
  ${licenseBadge}
  ${licenseLink}
`;
  }

  return '';
}

function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}

  ## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributors}
## Tests
${licenseSection}

`;
}

// function to write README file
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

module.exports = generateMarkdown;

function init() {
  inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
init();

