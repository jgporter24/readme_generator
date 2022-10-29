const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        type:'input',
        name:'title',
        message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'repo',
      message: 'What is your repository name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description of your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What command should be run to install dependencies?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the projects usage?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What does the User need to know about project contributions?',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
