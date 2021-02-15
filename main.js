const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// Create the Field class
class Field {
    constructor(field) {
        this._field = field;
    }
    print() {
        console.log(this._field.join(' '));
    }
}
