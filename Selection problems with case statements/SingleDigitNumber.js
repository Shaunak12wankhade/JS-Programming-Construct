const prompt = require("prompt-sync")();
const number = prompt("Enter a number to display its place value(between 1-100000): ");
switch (number.length) {
    case 1:
        console.log('UNIT')
        break;
    case 2:
        console.log('TEN')
        break;
    case 3:
        console.log('HUNDRED')
        break;
    case 4:
        console.log('THOUSAND')
        break;
    case 5:
        console.log('TEN THOUSAND')
        break;
    case 6:
        console.log('LAKH')
        break;
    case 7:
        console.log('TEN LAKH')
        break;
    case 8:
        console.log('CRORE')
        break;
    case 9:
        console.log('TEN CRORE')
        break;
    default:
        console.log('Single Digit only')
        break;
}