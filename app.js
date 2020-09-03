const argv = require('./config/yargs').argv;
const fs = require('fs');
const colors = require('colors');

let comando = argv._[0];
var base = argv.base;
var limite = argv.limite;
var data = '';


console.log(argv)

switch( comando ){
    case 'listar':

        console.log('=================='.green);
        console.log(`Tabla de ${base}`.green);
        console.log('=================='.green);

        for(let i = 1; i<=limite; i++){
            console.log(`${base} * ${i} = ${base * i }`);
        }
    break;

    case 'crear':

        for(let i = 1; i<=argv.l; i++){
            data += `${argv.b} * ${i} = ${argv.b * i }\n`;
        }

        fs.writeFile(`./archivos/tabla-${argv.b}.txt`, data, (err)=>{

            if(err) throw err;
            console.log('El archivo a sido creado'.green)
        })

    break;

    default:
        console.log('comando no reconocido')
}


//console.log(argv)
//console.log(argv.base);
//console.log(argv.limite)