import './App.css';

import Calculator from './layouts/Calculator';

import {  useEquation } from './provider/AppProvider'

function App() {
    const val = useEquation()
    console.log(val)

    return ( 
    < div className = "App" >
        <Calculator />
        </div>
    );
}

export default App;

