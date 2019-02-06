import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../action/index';
class TaskItem extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }
    onDelete = () => {
        this.props.onDeleteTask(this.props.task.id);
        this.props.onCloseForm();
    }
    onUpdate = () => {
        // this.props.onUpdate(this.props.task.id);
        this.props.onOpenFrom();
        // console.log('ha',this.props.task);
        this.props.onEditTask(this.props.task);
    }
    render() {
        let { index, task } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span
                        className={task.status === true ? 'label label-success' : 'label label-primary'}
                        onClick={this.onUpdateStatus}
                    >
                        {task.status === true ? ' Kích Hoạt' : 'ẨN'}

                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning"
                        onClick={this.onUpdate}
                    >
                        <span className="fa fa-pencil mr-5" />Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger"
                        onClick={this.onDelete}
                    >
                        <span className="fa fa-trash mr-5" />Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = state => {
    return {
        
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatusTask(id))
        },
        onDeleteTask: (id) => {
            dispatch(actions.deleteTask(id));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        },
        onOpenFrom: () => {
            dispatch(actions.openForm())
        },
        onEditTask: (task) => {
            dispatch(actions.editTask(task));
        }

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);

