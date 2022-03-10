import React,{Component} from 'react';

class Test extends Component {
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
        console.log(" constructor ")
        
    }

    componentDidMount(){
        console.log(" componentDidMount ")
    }

    handleClick(){
        let counter = this.state.counter
        counter += 1
        this.setState({counter: counter})
    }

    shouldComponentUpdate() {
        console.log(" shouldComponentUpdate ")
        return true;
    }

    componentDidUpdate(){
        console.log(" componentDidUpdate ")
    }

    componentWillUnmount(){
        console.log(" componentWillUnmount ")
    }

    render(){
        console.log(" render ")
        const { counter } = this.state;
        return (
            <div>
                Count value is: {counter}
                <button onClick={() => this.handleClick()}>Update Count</button>
            </div>
        )
    }
}

export default Test;


//Mounting Phase
    // constructor
    // componentWillMount
    // render
    // componentDidMount

//Updating Phase
    // shouldComponentUpdate
    // render
    // componetDidUpdate

//Unmounting Phase
    // componentWillUnmount