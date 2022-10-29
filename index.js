const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const emailValidator = require('email-validator');

const genMarkdown = require('./markdowngenerate');

//Array of quesitons

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
            validate: (value) => {
                (value ? true : 'Please enter a porject Title.')
            },
        },
        {
            type: 'input',
            name: 'repo',
            message: 'What is your repository name?',
            validate: (value) => {
                (value ? true : 'Please enter your repository name.')
            },
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?',
            validate: (value) => {
                (value ? true : 'Please enter your project description.')
            },
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What command should be run to install dependencies?',
            validate: (value) => {
                (value ? true : 'Please enter what command should be run to install dependendcies.')
            },
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the projects usage?',
            validate: (value) => {
                (value ? true : 'Please enter your project usage.')
            },
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What does the User need to know about project contributions?',
            validate: (value) => {
                (value ? true : 'Please enter your project contributions.')
            },
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions?',
            validate: (value) => {
                (value ? true : 'Please enter test instructions.')
            },
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license will this have?',
            choices: ["MIT", "ISC", "GNU GPLv3"],
            validate: (value) => {
                (value ? true : 'Please select a license')
            },
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: (value) => {
                (value ? true : 'Please enter your GitHub username.')
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: (value) => {
                (value ? true : 'Please enter your email.')
            },
        },
    ])
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);

        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });
