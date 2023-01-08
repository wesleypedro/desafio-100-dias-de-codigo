import '../App.css'
import { useState } from 'react';

function UseState() {
    const [count, setCount] = useState(0);
    const [valueInput, setValueInput] = useState('Wesley');
    const [showText, setShowText] = useState(true);

    const handleClick = () => {
        setCount((count) => count + 1);
        setShowText(!showText);
    }

    const onChangeInput = (event) => {
        setValueInput(event.target.value);
    }


    return (
        <div className='App'>
            <h1>Front Beginnners</h1>
            <h3>{count}</h3>
            <button onClick={handleClick}>Adicionar</button>
            <p>Bem-vindo(a) {showText && <u>ao nosso exemplo</u>} </p>

            <div>
                <input onChange={onChangeInput}/>
            </div>
            <h3>{valueInput}</h3>
        </div>
    )
}

export default UseState;