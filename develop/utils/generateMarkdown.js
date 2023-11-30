// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
  case 'GNU General Public License v3.0':
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  case 'MIT License':
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  case 'Apache License 2.0':
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  default:
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'GNU General Public License v3.0':
      return "https://choosealicense.com/licenses/gpl-3.0/";
    case 'MIT License':
      return "https://choosealicense.com/licenses/mit/";
    case 'Apache License 2.0':
      return "https://choosealicense.com/licenses/apache-2.0/";
    default:
      return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == ""){
    return ``
  }else{
    return(
    `## License
${license}

${renderLicenseLink(license)}`
  )}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return(
`# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Test
${data.tests}
## Questions
https://github.com/${data.github}
${data.email}
${renderLicenseSection(data.license)}`
);
}

module.exports = generateMarkdown;
