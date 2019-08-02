import arg from 'arg';
import { mountebankSelector } from './mountebank-selector';
import { mountebankRunner } from './mountebank-runner';

function parseArgumentsIntoOptions(rawArgs){
    const args = arg({
        '--directory': String,
        '-d': '--directory'
    },
    {
        argv: rawArgs.slice(2)
    })

    return {
        directory: args['--directory'] || "C:\\Source\\Limestone\\mobility-ebonding-service\\mountebank"
    }
}

export async function cli(args) {
    let options = parseArgumentsIntoOptions(args);
    
    var configFile = await mountebankSelector(options);

    if (configFile){
        console.log("run the mountebank on " + configFile);
    } else{
        console.log("no file selected.")
    }
}