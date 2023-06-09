const Button=(props)=>{
    return (<button  type="button" onClick={props.onClick}>{props.title}</button>)
}

export default Button;