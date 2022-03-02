// class component
import { Component } from 'react';

// components : props
// state

class Counter extends Component {
    // private 
    // mutable
    // reloads
    // diff 
    // virtual dom

    state = { count: this.props.count };

    inc = () => {
        let cnt = this.state.count;
        this.setState({ count: cnt + 1 });
    }

    dec = () => {
        let cnt = this.state.count;
        this.setState({ count: cnt - 1 });
    }

    // events
    render() {
        return <div>
            <button onClick={this.inc}>+</button>
            <h4>{this.state.count}</h4>
            <button onClick={this.dec}>-</button>
        </div>
    }
}

export default Counter;
