import { useState } from "react";

interface IMyProps {
    titles: string[],
}
function RadioButton(props:IMyProps) {

    const [states, setStates] = useState(props.titles.map((data) => false));

    const select = (index:Number) => {
        setStates(states.map((state, i) => i === index))
    }

    const list = [] as any;
    props.titles.forEach((data, i) => {
        list.push(<div><input type="radio" checked={states[i]} onClick={() => select(i)}/><label>{data}</label></div>)
      })
    return (
        <div className="RadioButton">
            <ul>{list}</ul>
        </div>
    );
}

export default RadioButton;