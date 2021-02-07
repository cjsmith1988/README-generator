// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
console.log(`
==================================================
Welcome to The README Generator. Lets get Started!
==================================================
`);
const questions = [];
return inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the Project Name? (Required)',
      validate: projectNameInput => {
        if (projectNameInput) {
          return true;
        } else {
          console.log('Please enter the project name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description of the Project? (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter your project description!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? (Required)',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please enterinstallation instructions!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to include a license?',
        default: true
      },
      {
        type: 'list',
        name: 'license',
        message: 'Pick a license:',
        choices: ['choice 1', "choice B", ],
        when: ({ confirmLicense }) => confirmLicense
      }
    
  ]);
};

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
promptUser().then(data => {
    console.log(data);
  })

