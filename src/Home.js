import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
class Home extends Component{
    static defaultProps = {
       fetchDataInit: () => {}
    }
    state = {
        hide:true,
        data:[],
        stateData:[]
    }
    componentDidMount(){
        this.props.fetchDataInit()
    }
    componentWillUpdate(prevProps){
        if(this.props.data.data !== prevProps.data.data){
            this.setState({
                hide:false,
            })      
        }
   }
    render(){
        const {hide} = this.state
        if(hide){
            return(
                <h3>Loading...</h3>
            )
        }
        return(
           <div>
                <h1>Welcome Home</h1>
                {this.props.data.data.map( (item, i) => (
                    <div key={i}> 
                        <h4>{item.title}</h4>
                        <small>{item.completed.toString()}</small>
                    </div>
                ))}
           </div>
        )
    }
}

export default Home