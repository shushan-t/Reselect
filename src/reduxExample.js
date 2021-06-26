import { Component } from "react";
import { getServerData } from './action';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import { selected } from "./reselect";

 class ReduxExample extends Component {
    // state = { 
    //     serverData: null,
    //  };

     componentDidMount(){
         this.props.getServerData();
     }
    render() { 
        return ( 
            
            <div className='div1'>
            {/* {Object.keys(this.props.data).map((item, index) => {
                console.log(this.props.data)
                
                
                return (
                <div className='div' key ={index}>
                    <h4>{ item }</h4>
                    <p>{`${this.props.data[item]}`}</p>
                    
                </div>
                )
            })} */}
            {this.props.completed.map((item, index) => {
                console.log(this.props.completed,"selected")
                return (
                <div className='div' key ={index}>
                    <h4>{ index }</h4>
                    <p>{`${this.props.completed[index]}`}</p>
                    
                </div>
                )
            })}
            </div>
        );
    }
}
 


 const mapStateToProps = (state, ownProps) => {
    return {
      data: state.server,
      completed: selected(state),

    }
}

 const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(
        {
            getServerData
        },
        dispatch,
    );
    }
    export default  connect(mapStateToProps, mapDispatchToProps)(ReduxExample)