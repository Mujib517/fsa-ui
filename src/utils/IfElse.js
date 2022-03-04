const IfElse = (props) => {
    return props.cond ? props.children[0] : props.children[1];
}

export default IfElse;
