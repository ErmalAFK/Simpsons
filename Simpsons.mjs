import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let TvSerie = await userInput.question('Welke TV Serie ?');

switch(TvSerie){
    case 'The Simpsons':
        locatie = console.log("The Simpsons vindt plaats in Springfield");
        break;
        default :
        console.log("Sorry, ik weet niet waar "+TvSerie+" zich afspeelt");
}

process.exit();