import '../styles/calculator.css'

import ResultScreen from './ResultScreen'
import MainPanel from './MainPanel'

const Calculator = () => {
    return (
        <div className="calculator">
            <ResultScreen />
            <MainPanel />
        </div>
    )
}

export default Calculator