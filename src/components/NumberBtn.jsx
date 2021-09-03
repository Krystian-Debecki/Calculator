import Button from "./Button";

import '../styles/numberButtons.css'

import { useEquation } from "../provider/AppProvider";
import { ADD_TO_EQUATION } from "../reducer/reducerActions";
import { CHANGE_ZERO } from "../reducer/reducerActions";
import  validateNumber, {validateZero}  from '../vallidate/validateNumber'
const NumberBtn = ({sign}) =>{
    const [{equation},dispatch] = useEquation()

    const handleClick = () => {
        if( !validateNumber(equation) ) return;

        if( validateNumber(equation) === CHANGE_ZERO )
            return dispatch({
                type:CHANGE_ZERO,
                payload:sign,
        })

        dispatch({
            type:ADD_TO_EQUATION,
            payload:sign,
        })
    }
    
    return (
        <Button 
            sign={sign}
            additionalClass="number-btn"
            click={handleClick}
        />
    )
}

export default NumberBtn