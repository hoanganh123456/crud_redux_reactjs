import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../action/index';
class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name : '',
            status : false
        }
    }
    
    onDisplayForm = () => {
        this.props.onCloseForm();
    }
    componentWillMount() {
        if (this.props.editTaskList) {
            this.setState({
                id: this.props.editTaskList.id,
                name: this.props.editTaskList.name,
                status: this.props.editTaskList.status
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.editTaskList) {
            this.setState({
                id: nextProps.editTaskList.id,
                name: nextProps.editTaskList.name,
                status: nextProps.editTaskList.status
            })
        } else if (!nextProps.editTaskList) {
            this.setState({
                id: '',
                name : '',
                status : false
            })
        }
    }
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        if (name === 'status') {
            value = target.value === "true" ? true : false;
        }
        this.setState({
            [name] : value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        let data = this.state;
        //this.props.onSubmit(data);
        this.props.onAddTask(data);
        this.onClear();
        this.onDisplayForm();
    }
    onClear = () => {
        this.setState({
            name : '',
            status : false
        })
    }
    render() {
        let { id } = this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                    {id === '' ? 'Thêm Công Việc' : 'Cập nhập công việc'}
                        <span 
                            className="fa fa-times-circle text-right"
                            onClick={ this.onDisplayForm }
                        ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={ this.onSubmit }>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" 
                                className="form-control"
                                name="name" 
                                value={ this.state.name }
                                onChange={ this.onChange }
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" required="required"
                            name="status"
                            value={ this.state.status }
                            onChange={ this.onChange }
                        >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={ this.onClear } >Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        onAddTask : (task) => {
            dispatch(actions.addTask(task))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (TaskForm);