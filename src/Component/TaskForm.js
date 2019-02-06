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
        if (!!this.props.itemEditting && this.props.itemEditting.id !== null) {
            this.setState({
                id: this.props.itemEditting.id,
                name: this.props.itemEditting.name,
                status: this.props.itemEditting.status
            })
        } else {
            this.onClear();
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditting) {
            this.setState({
                id: nextProps.itemEditting.id,
                name: nextProps.itemEditting.name,
                status: nextProps.itemEditting.status
            })
        } else {
            this.onClear();
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
        this.props.onSaveTask(data);
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
        if (!this.props.isDisplayForm) return null
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
                            <button type="submit" className="btn btn-warning">Lưu</button>&nbsp;
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
        isDisplayForm: state.isDisplayForm,
        itemEditting: state.itemEditting
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        onSaveTask : (task) => {
            dispatch(actions.saveTask(task))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        },
        onToggleFrom: () => {
            dispatch(actions.toggleForm())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (TaskForm);