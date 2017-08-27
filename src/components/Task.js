import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteTask, completeTask} from './../ducks/reducer';

class Task extends Component {
  
 
    render() {
        let {deleteTask, completeTask} = this.props;
        return(
            <div className="task-container">

                <div style={this.props.style} className={this.props.isChecked} key={this.props.index}> {this.props.taskItem.item}</div> 
                <button disabled={this.props.isComplete} onClick={(e)=>completeTask(this.props.taskItem)}>Complete</button>
                <button onClick={(e)=>deleteTask(this.props.taskItem)}>Delete</button>
            </div>
            
        )
    }
}

function mapStateToProps(state) {
    let {list} = state;
    return {
        list
    }
}

export default connect(mapStateToProps, {deleteTask, completeTask})(Task);