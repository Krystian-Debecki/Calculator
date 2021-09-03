import { CHANGE_ZERO } from "../reducer/reducerActions";

export const mathCharacters = ['+', '-', '*', '/'];

export const validateLastCharacter = (equation, { charsToCheck, checkIfNumber=false }) => {
    const lastCharacter = equation[equation.length - 1];

    if(checkIfNumber){
        if(!isNaN(lastCharacter)) return alert('Nie można otwierać nawiasu po liczbie')
    }

    if (Array.isArray(charsToCheck)) {
        for (let char of charsToCheck)
            if (lastCharacter === char) return false;
    }

    if (lastCharacter === charsToCheck) return false;

    return true;
}

export const validateZero = (equation) => {
    const length = equation.length;
    
    if(equation[0] === 0) return false;

    if ( length === 1 && equation[length-1] === '0')
        return false;
        
    if( length >= 3)
        if( equation[length-1] === '0' )
            for(let i = 0; i<mathCharacters.length; i++)
                if( equation[length - 2] === mathCharacters[i]) 
                    return false;
    
    return true;
}