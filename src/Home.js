import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchDataInit} from './actions/dataActions';
class Home extends Component{
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
const mapStateToProps = (state) => ({
    data: state.data,
 })
 const mapDispatchToProps = (dispatch) => ({
    fetchDataInit: () => dispatch(fetchDataInit()),
 })
 export default connect(mapStateToProps, mapDispatchToProps)(Home)