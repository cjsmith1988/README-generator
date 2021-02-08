// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {    
  switch (license){
    case "GNU AGPLv3":
      licenseBadge = "[![License: GNU AGPLv3](https://img.shields.io/badge/License-GNU%20AGPLv3-yellow.svg)](https://choosealicense.com/licenses/agpl-3.0/)";
      break;
    case "GNU GPLv3":
      licenseBadge = "[![License: GNU GPLv3](https://img.shields.io/badge/License-GNU%20GPLv3-yellow.svg)](https://choosealicense.com/licenses/gpl-3.0/)";
      break;
    case "GNU LGPLv3":
      licenseBadge = "[![License: GNU LGPLv3](https://img.shields.io/badge/License-GNU%20LGPLv3-yellow.svg)](https://choosealicense.com/licenses/lgpl-3.0/)";
      break;
    case "Mozilla Public License 2.0":
      licenseBadge = "[![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-Mozilla%20Public%202.0-blue.svg)](https://choosealicense.com/licenses/mpl-2.0/)";
      break;
    case "Apache License 2.0":
      licenseBadge = "[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-orange.svg)](https://choosealicense.com/licenses/apache-2.0/)";
      break;
    case "MIT License":
      licenseBadge = "[![License: MIT License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://choosealicense.com/licenses/mit/)";
      break;
    case "Boost Software License 1.0":
      licenseBadge = "[![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost%20Software%201.0-lightgrey.svg)](https://choosealicense.com/licenses/bsl-1.0/)";
      break;
    case "The Unlicense":
      licenseBadge = "[![License: The Unlicense](https://img.shields.io/badge/License-The%20Unlicense-red.svg)](https://choosealicense.com/licenses/unlicense/)";
      break;
    default:
      licenseBadge = "";
  };
  return licenseBadge;
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, licenseBadge) {
  if (!license) {
    return '';
  };
  return `
  ## License
  This project has been assigned a ${license}. For more informaiton on this license please click the badge below:

  ${licenseBadge}
  `
};
//function to make the table of contents link dynamic based on if they have license or not
function renderLicenseTCLink(confirmLicense) {
  if (confirmLicense) {
    return `* [License](#License)`;
  };
  return '';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // destructure data ${badge}
  const { userName, email, projectName, description, installation, usage, confirmLicense, license, contribute, test } = data;
  let altProjName = projectName.replace(/ /g, "%20"); //remove spaces for use in mailto
  let licenseBadge = renderLicenseBadge(license);
  return `
  ${licenseBadge}
  # ${projectName}

  ## Description
  ${description}

  ## Table of Contents:
  * [Installation](#Installation)
  * [Usage](#Usage)
  ${renderLicenseTCLink(confirmLicense)}
  * [Contributing](#Contributing)
  * [Tests](#Test)
  * [Questions](#Questions)
  
  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ${renderLicenseSection(license, licenseBadge)}

  ## Contributions
  ${contribute}

  ## Test
  ${test}

  ## Questions
  View my: [GitHub profile](https://www.github.com/${userName})

  If you have any further questions regarding this project please email: [${email}](mailto:${email}?subject=[Question]%20${altProjName}).
`;
}
module.exports = generateMarkdown;

