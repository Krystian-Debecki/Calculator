/* eslint no-eval: 0 */

import {
    ADD_TO_EQUATION,
    DEL_CHAR_FROM_EQUATION,
    SHOW_RESULT_OF_EQUATION,
    REMOVE_EQUATION,
    CHANGE_ZERO

} from "./reducerActions"

import { createMissingParenthesis } from "../vallidate/validateParenthesis";
import { mathCharacters } from "../vallidate/validateTools";
import { validateLastCharacter } from "../vallidate/validateTools";
import { validateDivideByZero } from "../vallidate/validateGetResult";



export const init = {
    equation: [],
    missingParenthesis: 0,
    result: '',
    history: '',
}

const reducer = (state, action) => {
    let equation = [];
    let parenthesis = state.missingParenthesis;
    switch (action.type) {
        
        case ADD_TO_EQUATION:
            console.log(state.equation)
            if (!action.payload) return;

            if(action.payload === "(") parenthesis += 1;
            else if(action.payload === ")") parenthesis-= 1;

            return {...state, equation: [...state.equation, action.payload], missingParenthesis: parenthesis};

        case DEL_CHAR_FROM_EQUATION:
            equation = state.equation
            equation.splice(state.equation.length - 1, 1);
            return {...state, equation: equation }

        case REMOVE_EQUATION:
            return { ...state, equation: [], missingParenthesis: 0 }

        case CHANGE_ZERO:  
            equation = state.equation
            equation.splice(state.equation.length - 1, 1);
            equation.push(action.payload)
            return { ...state, equation: equation}

        case SHOW_RESULT_OF_EQUATION:
            let equationCopy = [...state.equation]
            parenthesis = state.missingParenthesis

            if (!validateLastCharacter(equationCopy, { charsToCheck:[...mathCharacters,'('] } )){
                if(equationCopy[equationCopy.length-1] === '(') {
                    --parenthesis;
                    if(equationCopy.length>1)
                        equationCopy.pop()
                }
                    
                equationCopy.pop()
            }
             
            
            let addMisiingParenthsis = createMissingParenthesis(parenthesis)
    
            return {
                equation: [eval(equationCopy.join("") + addMisiingParenthsis)],
                history: equationCopy.join("") + addMisiingParenthsis ,
                missingParenthesis: 0,
            }
        default:
            return;
    }

}

export default reducer;