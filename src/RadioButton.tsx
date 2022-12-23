interface IMyProps {
    titles: string[],
}
function RadioButton(props:IMyProps) {
    const list = [] as any;
    props.titles.forEach((data) => {
        list.push(<div><input type="radio" /><label>{data}</label></div>)
      })
    return (
        <div className="RadioButton">
            <ul>{list}</ul>
        </div>
    );
}

export default RadioButton;