import Button from "./Button";

import { useEquation } from "../provider/AppProvider";
import {  DEL_CHAR_FROM_EQUATION  } from "../reducer/reducerActions";

const DeleteBtn = () =>{
    const [state,dispatch] = useEquation();

    const handleClick = () =>{
        dispatch({
            type: DEL_CHAR_FROM_EQUATION
        })
    }

    return (
        <Button 
            sign='Del'
            click={handleClick}
        />
    )
}

export default DeleteBtn