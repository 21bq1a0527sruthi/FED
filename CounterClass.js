import React,{Component} from "react";
class CounterClass extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }
    incrementHandler = () =>{
            this.setState({count:this.state.count+1});
    }
    decrementHandler = () =>{
        this.setState({count:this.state.count-1});
}
    render(){
        return (
            <div>
                <button type="button" onClick={this.incrementHandler}>Incerment</button>
                &nbsp;&nbsp;{this.state.count}&nbsp;&nbsp;
                <button type="button" onClick={this.decrementHandler}>Decerment</button>
            </div>
        );
    }
}
export default CounterClass;
