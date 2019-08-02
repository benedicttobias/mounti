import { pathToFileURL } from 'url';

const inquirer = require('inquirer')
const inquirerFileTreeSelection = require('inquirer-file-tree-selection-prompt');
const readChunk = require('read-chunk');
const fileType = require('file-type');


export async function mountebankSelector(options) {

    inquirer.registerPrompt('file-tree-selection', inquirerFileTreeSelection)

    return await inquirer
        .prompt([{
            type: 'file-tree-selection',
            name: 'configFile',
            root: options.directory
        }])
        .then(answer => {
            return answer.configFile;
        });
}