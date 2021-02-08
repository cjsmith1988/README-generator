// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // destructure data ${badge}
  const { userName, email, projectName, description, installation, usage, license, contribute, test } = data;
  let altProjName = projectName.replace(" ", "%20"); //remove spaces for use in mailto
  return `
  
  # ${projectName}

  ## Description
  ${description}

  ## Table of Contents:
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Test)
  * [Questions](#Questions)
  
  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## License
  ${license}

  ## Contributions
  View my GitHub profile: [here](https://www.github.com/${userName})

  ${contribute}

  ## Test
  ${test}

  ## Questions
  If you have any further questions regarding this project please email: [${email}](mailto:${email}?subject=[Question]%20${altProjName}).

`;
}
module.exports = generateMarkdown;

