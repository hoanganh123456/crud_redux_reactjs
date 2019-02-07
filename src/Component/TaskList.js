import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../action/index';
class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        // this.props.onFilter(
        //     name === "filterName" ? value : this.state.filterName,
        //     name === "filterStatus" ? value : this.state.filterStatus
        // )
        let filter = {
            name: name === "filterName" ? value : this.state.filterName,
            status: name === "filterStatus" ? value : this.state.filterStatus
        }
        this.props.onFilterTable(filter);
        this.setState({
            [name] : value
        })
    }
    
    render() {
        let { tasks, filterTable, keyword, sort } = this.props;
        let { filterName, filterStatus } = this.state;
        let sortValue = sort.value;
        // filter on table
        if (filterTable) {
            if (filterTable.name) {
                tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(filterTable.name) !== -1;
                })
            }
            tasks = tasks.filter((task) => {
                if (filterTable.status === -1) {
                    return task;
                } else {
                    return task.status === (filterTable.status === 1 ? true : false);
                }
            })
        }
        // search
        if (keyword) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            })
        }
        // sort
        if (sort.by === 'name' ) {
            tasks.sort((a,b) => {
                if (a.name > b.name) return sortValue;
                else if (a.name < b.name) return -sortValue;
                else return 0
            });
        }
        else {
          tasks.sort((a,b) => {
            if (a.status > b.status) return -sortValue;
            else if (a.status < b.status) return sortValue;
            else return 0
          });
        }
        let elmTask = tasks.map((task,index)=>{
            return <TaskItem key={ task.id } index={ index } task={ task } 
                        // onUpdateStatus= { this.props.onUpdateStatus } 
                        // onDelete = { this.props.onDelete }
                        // onUpdate = { this.props.onUpdate }
                    />
        });
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng Thái</th>
                            <th className="text-center">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td>
                                <input type="text" 
                                    className="form-control"
                                    name="filterName" 
                                    value={ filterName }
                                    onChange={ this.onChange }
                                />
                            </td>
                            <td>
                                <select className="form-control"
                                    name="filterStatus"
                                    value={ filterStatus }
                                    onChange={ this.onChange }

                                >
                                    <option value={-1}>Tất Cả</option>
                                    <option value={0}>Ẩn</option>
                                    <option value={1}>Kích Hoạt</option>
                                </select>
                            </td>
                            
                        </tr>
                        
                        { elmTask }
                        
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        tasks: state.tasksReducer,
        filterTable : state.filterTable,
        keyword: state.search,
        sort: state.sort
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        onFilterTable : (filter) => {
            dispatch(actions.filterTable(filter))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (TaskList);