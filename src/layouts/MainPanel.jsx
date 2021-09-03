import '../styles/mainPanel.css'

import RemoveAllBtn from '../components/RemoveAllBtn'
import MathButtons from './MathButtons'
import EqualBtn from '../components/EqualBtn'
import DeleteBtn from '../components/DeleteBtn'
import FractionBtn from '../components/FractionBtn'
import DivideBtn from '../components/DivideBtn'
import PlusBtn from '../components/PlusBtn'
import Minusbtn from '../components/MinusBtn'
import TimesBtn from '../components/TimesBtn'
import OpenParenthesisBtn from '../components/OpenParenthesisBtn'
import CloseParenthesisBtn from '../components/CloseParenthesisBtn'


const MainPanel = () => {
    return (
        <main className="main-panel">
            <EqualBtn />
            <OpenParenthesisBtn />
            <CloseParenthesisBtn />
            <FractionBtn />

            <DivideBtn />
            <PlusBtn />
            <Minusbtn />
            <TimesBtn />

            <MathButtons />

            <DeleteBtn />
            <RemoveAllBtn />
        </main>
    )
}

export default MainPanel