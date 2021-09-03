import {    validateLastCharacter, 
            mathCharacters,
            validateZero 
        } 
from "./validateTools"
import { CHANGE_ZERO } from "../reducer/reducerActions";

const validateNumber = (equation) => {
    const length = equation.length;

    console.log('Wchodzi')

    if ( !validateLastCharacter(equation, {charsToCheck:')'}))
        return false;

    if( !validateZero(equation) )    
        return CHANGE_ZERO

    return true;
}


export default validateNumber