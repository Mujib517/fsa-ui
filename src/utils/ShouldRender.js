const ShouldRender = (props) => {
    return props.cond ? props.children : null;
}

export default ShouldRender;
