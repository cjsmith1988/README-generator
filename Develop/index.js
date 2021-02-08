// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const testInfo = require('./utils/testInfo');
//const generatePage = require('./src/page-template');
const generateMarkdown = require('./utils/generateMarkdown');
//ability to use test data
const profileDataArgs = process.argv.slice(2, process.argv.length);

// TODO: Create an array of questions for user input
const promptUser = () => {
console.log(`
==================================================
Welcome to The README Generator. Lets get Started!
==================================================
`);
return inquirer.prompt([
    {
        type: 'input',
        name: 'userName',
        message: 'What is your gitHub user name? (Required)',
        validate: userNameInput => {
          if (userNameInput) {
            return true;
          } else {
            console.log('Please your GitHub user name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your contact email address!');
            return false;
          }
        }
      },
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
            console.log('Please enter installation instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use? (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter usage instructions!');
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
        choices: ['GNU AGPLv3', "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"],
        when: ({ confirmLicense }) => confirmLicense
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'Please provide guidelines for contributing? (Required)',
        validate: contributeInput => {
          if (contributeInput) {
            return true;
          } else {
            console.log('Please enter usage instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please provide details on how to test? (Required)',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Please enter usage instructions!');
            return false;
          }
        }
      }
  ]);
};

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/READMETest.md', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
};
// TODO: Create a function to initialize app
function init() {
    //able to create the README with test data by typing 'node index Test'
    if (profileDataArgs[0].toLowerCase() == "test"){
        writeToFile(generateMarkdown(testInfo));
        console.log('ReadMe has been Created');
    } else {
        promptUser().then(data => {
        return generateMarkdown(data);
        })
        .then(markDown => {
            return writeToFile(markDown);
        })
        console.log('File Created');
    };
};
       
// Function call to initialize app
init();