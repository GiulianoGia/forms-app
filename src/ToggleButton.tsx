import { stat } from "fs";
import { MouseEventHandler, useEffect, useState } from "react";

interface IToggleButton {
    title:string;
    handleClick?:(index:Number) => void;
    checked?:boolean|null
    key?:Number
}


function ToggleButton({title, handleClick=(index:Number)=>{}, checked=null, key=1}:IToggleButton) {

    const [toggleState, setToggleState] = useState<boolean>(checked != null?checked: false);


    const onClick = () => {
        console.log(key)
        handleClick(key);
        setToggleState(checked != null? checked: !toggleState);
        console.log(checked);
    }


    return (
        <div className="ToggleButton" onClick={() => onClick()}><input type="radio" checked={toggleState}/><span>{title}</span></div>
    );
}

export default ToggleButton;