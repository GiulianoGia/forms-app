import { stat } from "fs";
import { prependOnceListener } from "process";
import { useEffect, useState, Children, cloneElement } from "react";
import { JsxEmit } from "typescript";

interface IButtonGroup {
    children: JSX.Element[]
}

function ButtonGroup({children}:IButtonGroup) {

    const [states, setStates] = useState<boolean[]>(Children.map(children, () => false));

    const [childs, setChilds] = useState(Children.map(children, (child, i) => cloneElement(child, {
        key: i,
        handleClick: (index:Number) => {setStates(childs.map((child, i) => i === index)); console.log(index)},
        checked: states[i],
    })));


    
    useEffect(() => {
        
    });

    return(
        <div className="ButtonGroup">
            {childs}
        </div>
    );
}

export default ButtonGroup;