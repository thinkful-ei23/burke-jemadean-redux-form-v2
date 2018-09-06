'use strict';

// Create synchronous validators which check that the Tracking Number field:
// Contains a value
// The value is non-empty
// The value is be exactly 5 characters long
// Each character is a number

export const required = value => value ? undefined : 'Required';
export const nonEmpty = value => value.trim() !== ''? undefined : 'Cannot be empty';
export const requiredLength = value => value.length === 5 ? undefined : 'Tracking number must be 5 characters long';
export const requiredAllNumbers = value => value.split('').find(character => isNaN(character) || character === ' ') ? 'Must be all numbers' : undefined;