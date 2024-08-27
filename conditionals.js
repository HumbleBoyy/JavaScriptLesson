// const x = '10';

// if(x === 10){
//     console.log('x is 10')
// }else{
//     console.error("Error")
// }

const a = 10;
const color = a < 10 ? 'blue' : 'green'

switch(color){
    case 'blue':
        console.log('color is blue');
        break;
        case 'green':
            console.log('color is green')
            break;

            default:
                console.log('color is NOt blue or green');
                break;
}