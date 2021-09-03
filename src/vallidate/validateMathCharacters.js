import { validateLastCharacter, mathCharacters } from "./validateTools"

const validateMathCharacter = (equation) => {
    if (!validateLastCharacter(equation, { charsToCheck:[...mathCharacters,'('] } ))
        return false;

    return true;
}

export default validateMathCharacter