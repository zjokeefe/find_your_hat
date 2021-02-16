const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// Create the Field class
class Field {
    constructor(field = [[]]) {
        this._field = field;
        this._locationX = 0;
        this._locationY = 0;
        this._field[0][0] = pathCharacter;
    }
    print() {
        console.log(this._field.join(' '));
    }
}