import NumberBtn from "../components/NumberBtn";

const MathButtons = () => {
    const numberButtons = [];

    for (let i=0;i<10;i++){
        const add = i.toString()
        numberButtons.push(
            <NumberBtn sign={add} key={i}/>
        )
    }

    return (
        <>
          {numberButtons}
        </>
    )
}

export default MathButtons