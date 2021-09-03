import { validateLastCharacter, mathCharacters } from "./validateTools";

 function getLastMathCharIndex(equation,mathCharacters) {
     console.log('MATHS',mathCharacters)
    for(let i = equation.length; i >0  ; i--)
        for(let j=0; j < mathCharacters.length; j++)
            if( equation[i] === mathCharacters[j] )
                return i;
}           

const validateFraction = (equation) => {
    if (!validateLastCharacter(equation, { charsToCheck: [
            undefined,
            ')',
            '(',
            '.',
            ...mathCharacters,
    ]})) 
        return alert('TO NIELEGALNE!')

    
    if(equation.length >= 2){
        const lFracIndex = equation.lastIndexOf('.')

        if(lFracIndex !== -1) {
            const lMathCharacter =  getLastMathCharIndex(equation,[...mathCharacters,'(']);
            if(!getLastMathCharIndex(equation,[...mathCharacters,'('])
                && 
                lFracIndex
            )
                return false;
            if( lMathCharacter < lFracIndex )
                return false;
        }   

    }
    return true;
}

export default validateFraction