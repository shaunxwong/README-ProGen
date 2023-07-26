const inquirer = require('inquirer');
const fs = require('fs');

// Function to generate the README content
function generateREADME(answers) {
  return `
# ${answers.title}

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

This project is licensed under the terms of the ${answers.license} license.

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

For any questions or concerns regarding this project, please contact me via GitHub: [${answers.username}](https://github.com/${answers.username})

Or you can email me at: ${answers.email}
`;
}

// Prompt user for input using Inquirer
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description for your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: [
        'Apache-2.0',
        'MIT',
        'GNU-GPLv3',
        'BSD-3-Clause',
        'Mozilla-Public-License-2.0',
        'None',
      ],
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ])
  .then((answers) => {
    const readmeContent = generateREADME(answers);

    // Write the generated README content to a file
    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.error(err) : console.log('README.md successfully generated!')
    );
  })
  .catch((error) => {
    console.error(error);
  });
