import '../styles/resultScreen.css'

import { useEquation } from '../provider/AppProvider'
import { useState } from 'react';
import { createMissingParenthesis } from '../vallidate/validateParenthesis';

const ResultScreen = () => {
    const [{equation,history,missingParenthesis}] = useEquation();

    const closingParenthesis = createMissingParenthesis(missingParenthesis)

    return (
        <div className="result-screen">
            <p className="result-screen__history">{history || ""}</p>
            <p className="result-screen__equation">
                {equation.join("")}
                {<span className="result-screen__added-closed-parenthesis">{closingParenthesis}</span>}
            </p>
        </div>
    )
}


export default  ResultScreen