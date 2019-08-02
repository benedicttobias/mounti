import chalk from 'chalk';

export function mountebankRunner(options) {
    options = {
        ...options,
        targetDirectory: options.targetDirectory || process.cwd(),
    };

    // run mountebank

    console.log('Here in mountebank runner', chalk.green.bold('DONE'));
    return true;
}