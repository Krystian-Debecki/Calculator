import { validateLastCharacter } from "./validateTools" 
import { mathCharacters } from "./validateTools"

export const createMissingParenthesis = (missingParenthesis) => {
    let addMisiingParenthsis = ""

    for(let i=0; i< missingParenthesis;i++){
        addMisiingParenthsis+=")"
    }
    
    return addMisiingParenthsis
}

export const validateOpenParenthesis = (equation) => {
    if( !validateLastCharacter(equation,{
        checkIfNumber:true,
        charsToCheck: ['(',')','.']
    })) 
        return false;

    return true;
}

export const validateClosingParenthesis = (equation,missingParenthesis) => {
    if( !validateLastCharacter(equation,{
        charsToCheck:[...mathCharacters,'(']
    })) 
        return false;

    if(missingParenthesis <= 0) return false;

    return true;
}