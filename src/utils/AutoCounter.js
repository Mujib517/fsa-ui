import { Component } from "react";

class AutoCounter extends Component {

    state = { count: 0 };

    // component reloads
    // children reload
    constructor() {
        super();
        this.interval = setInterval(() => {
            const cnt = this.state.count;
            console.log('count is ', cnt);
            this.setState({ count: cnt + 1 });
        }, 1000);
    }

    shouldComponentUpdate = (prev, next) => {
        if (next.count >= 5)
            return false;
        return true;
    }

    componentDidUpdate = () => {
        console.log('component did update');
    }

    render() {
        return <div>
            <h1>{this.state.count}</h1>
        </div>
    }

    componentWillUnmount = () => {
        clearInterval(this.interval);
    }

}

export default AutoCounter;
