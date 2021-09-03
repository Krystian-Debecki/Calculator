import '../styles/button.css'
import DeleteIcon from './DeleteIcon';
import RemoveIcon from './RemoveIcon';


const Button = ({additionalClass, sign = 0, click}) => {

    let showSign = sign;

    if(sign === 'Del') showSign = <DeleteIcon />
    if(sign === 'Rem') showSign =<RemoveIcon />

    return (
        <button
            className={` button 
                ${additionalClass || " "} 
            `}
            onClick={click}
        >
            {showSign}
        </button>
    )
}

export default Button