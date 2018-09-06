// validators mess: 

// Contains a value
// The value is non-empty
// The value is be exactly 5 characters long
// Each character is a number

const required = value => value ? undefined : 'Required';
const nonEmpty = value => value.trim() !== ''? undefined : 'Cannot be empty';
const rightAmount = value => value.length === 5 ? undefined : 'Not a valid length';
const eachCharacterNumber = value => value.split('').find(character => isNaN(character) || character === ' ') ? 'Must be all numbers' : undefined;
