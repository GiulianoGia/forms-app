import { useState } from "react";

interface IMyProps {
    titles: string[],
    onClick?:(selectedValue:string) => void;
}
function RadioButton(props:IMyProps) {

    const [states, setStates] = useState(props.titles.map((data) => false));
    const [selected, setSelected] = useState("");
    const select = (index:Number) => {
        const onClick = props.onClick?props.onClick:(selectedValue:string) => null;
        setStates(states.map((state, i) => i === index))
        onClick(props.titles[parseInt(index.toString())]);
    }

    const list = [] as any;
    props.titles.forEach((data, i) => {
        list.push(<div><input type="radio" checked={states[i]} onClick={() => select(i)}/><label>{data}</label></div>)
      })
    return (
        <div className="RadioButton">
            <ul>{list}</ul>
            <label>{selected}</label>
        </div>
    );
}

export default RadioButton;