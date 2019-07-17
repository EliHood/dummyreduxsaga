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
        this.props.fetchDataInit();
    }
    componentWillUpdate(prevProps){
        console.log(prevProps.data.data)
        if(this.props.data.data !== prevProps.data.data){
            this.setState({
                hide:false,
                stateData: this.props.data.data
            })
        }
   }
    render(){
        console.log(this.state.stateData)
        const {hide} = this.state
        if(hide){
            return(
                <h3>Loading...</h3>
            )
        }
        return(
           <div>
                <h1>Welcome Home</h1>
                {this.state.hide ? (
                     this.state.stateData.map( (data, i) => (
                        <div key={i}>
                            <h3>{data.title}</h3>
                      </div>
                    ))
                ):(
                    null
                )}
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