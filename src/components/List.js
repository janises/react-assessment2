import React, {Component} from 'react';
import Task from './Task';
import {connect} from 'react-redux';
import {handleChange, createTask, completeTask, deleteTask} from './../ducks/reducer';

class List extends Component {
    
    render(){
       const divStyle = {
        paddingRight: 10
       };

       let {completeTask, deleteTask, createTask, handleChange, newTask, isDisabled, list} = this.props;

        return (
            <div className="container">

                <input value={newTask} placeholder="task" type='text' onChange={(e)=> handleChange(e)}/> 
                <button onClick={(e)=>createTask(newTask)} disabled={isDisabled}> Add Task </button>
                <div className="list">
                    <h3>Tasks </h3>
                    
                        {
                            list.length > 0 ? (
                                list.map((item)=> {
                                
                                    return <Task style={divStyle} isChecked={item.isChecked} index={item.key} taskItem={item} isComplete={item.isComplete} />
                                     
                                })
                            ) : null
                        }
                    
                </div>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    let {list, key, isDisabled, newTask} = state;
    return {
        list,
        key,
        isDisabled,
        newTask
    }
}

let outputActions = {
    handleChange,
    completeTask,
    createTask,
    deleteTask
}


export default connect(mapStateToProps, outputActions)(List);