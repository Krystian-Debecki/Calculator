import Button from "./Button";

import { useEquation } from '../provider/AppProvider'
import { validateLastCharacter } from "../vallidate/validateTools";
import { SHOW_RESULT_OF_EQUATION } from "../reducer/reducerActions";
const EqualBtn = () =>{ 
    const [{equation},dispatch] = useEquation();

    const handleClick = () => {

        dispatch({
            type: SHOW_RESULT_OF_EQUATION,
        })
    }
    return (
        <Button 
            sign={'='}
            click={handleClick}
            additionalClass="equal-btn"
        />
    )
}

export default EqualBtn