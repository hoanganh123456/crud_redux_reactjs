import React, { Component } from 'react';
import './App.css';
import TaskForm from './Component/TaskForm';
import Control from './Component/Control';
import TaskList from './Component/TaskList';
import { connect } from 'react-redux';
import * as actions from './action/index'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // tasks : [],
      // isDisplayForm: false,
      // editTaskList: null,
      filter : {
        name: '',
        status: -1
      },
      keyword: '',
      sortBy : 'name',
      sortValue: 1
    }
  }
  // componentWillMount = () => {
  //   if (localStorage && localStorage.getItem('tasks')) {
  //     let tasks = JSON.parse(localStorage.getItem('tasks'));
  //     this.setState({
  //       tasks: tasks
  //     });
  //   }
  // }
  // onGenerateData = () => {
  //   let tasks = [
  //     {
  //       id: this.generateID(),
  //       name: "Học Angular 5",
  //       status: true
  //     },
  //     {
  //       id: this.generateID(),
  //       name: "Học Node js",
  //       status: false
  //     },
  //     {
  //       id: this.generateID(),
  //       name: "Học React js",
  //       status: false
  //     },
  //     {
  //       id: this.generateID(),
  //       name: "Học Laravel",
  //       status: true
  //     }
  //   ];
  //   this.state = {
  //     tasks : tasks,
  //   }
  //   localStorage.setItem('tasks',JSON.stringify(tasks));
  // }

  // onCloseForm = () => {
  //   this.setState({
  //     isDisplayForm: false,
  //     editTaskList: null
  //   })
  // }

  onFormToggle = () => {
    // if (this.state.isDisplayForm && this.state.editTaskList !== null) {
    //   this.setState({
    //     isDisplayForm: true,
    //     editTaskList: null
    //   })
    // } else {
    //   this.setState({
    //     isDisplayForm: !this.state.isDisplayForm,
    //     editTaskList: null
    //   })
    // }
    let { itemEditting } = this.props;
    if (itemEditting && itemEditting.id !== null) {
      this.props.onOpenFrom();

    } else {
      this.props.onToggleFrom();
    }
    this.props.onClearTask({
      id: '',
      name : '',
      status : false
    })  
  }

  onSubmit = (data) => {
    let { tasks } = this.state;
    if(data.id === ""){
      data.id = this.generateID();
      tasks.push(data);
    }
    else {
      let index = this.findIndex(data.id);
      tasks[index] = data;
    }
    this.setState({
      tasks : tasks,
      editTaskList: null
    })
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  // s4 = () => {
  //   return Math.floor(( 1 + Math.random() ) * 0x10000 ).toString(16).substring(1);
  // }
  // generateID = () => {
  //   return this.s4() + this.s4() + "-" + this.s4() + "-" + this.s4() + this.s4() + "-" + this.s4() + this.s4()
  // }
  // onUpdateStatus = (id) => {
  //   let {tasks} = this.state;
  //   let index = this.findIndex(id);
  //   if (index !== -1) {
  //     tasks[index].status = !tasks[index].status;
  //     this.setState({
  //       tasks: tasks
  //     })
  //   }
  //   localStorage.setItem("tasks",JSON.stringify(tasks));  
  // }
  findIndex = (id) => {
    let {tasks} = this.state;
    let result = -1;
    tasks.forEach((task,index)=> {
      if (task.id === id) {
        result = index;
        return result;
      }
    });
    return result;
  }
  // onDelete = (id) => {
  //   let {tasks} = this.state;
  //   let index = this.findIndex(id);
  //   if (index !== -1) {
  //     tasks.splice(index,1);
  //     this.setState({
  //       tasks: tasks
  //     })
  //   }
  //   localStorage.setItem("tasks",JSON.stringify(tasks)); 
  //   this.onCloseForm(); 
  // }
  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    })
  }
  onUpdate = (id) => {
    let {tasks} = this.state;
    let index = this.findIndex(id);
    let editTaskList = tasks[index];
    this.setState({
      editTaskList: editTaskList
    })
    this.onShowForm();
  }
  onFilter = (filterName, filterStatus) => {
    console.log(filterName + "-" + filterStatus);
    filterStatus = parseInt(filterStatus,10);
    this.setState({
      filter : {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    })
  }
  onSearch = (keyword) => {
    this.setState({
      keyword : keyword
    })
  }
  onSort  = (sortBy,sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    })
  }
  render() {
    let {  //isDisplayForm, 
        editTaskList, filter, sortBy, sortValue 
    } = this.state;
    let { isDisplayForm } = this.props;
    if (filter) {
      // if (filter.name) {
      //   tasks = tasks.filter((task) => {
      //     return task.name.toLowerCase().indexOf(filter.name) !== -1;
      //   })
      // }
        // tasks = tasks.filter((task) => {
        //   if (filter.status === -1) {
        //     return task;
        //   } else {
        //     return task.status === (filter.status === 1 ? true : false);
        //   }
        // })
    }
    // if (keyword) {
    //   tasks = tasks.filter((task) => {
    //     return task.name.toLowerCase().indexOf(keyword) !== -1;
    //   })
    // }

    // let elmTaskForm = isDisplayForm ? <TaskForm 
    //   // onCloseForm = { this.onCloseForm } 
    //   onSubmit = { this.onSubmit } 
    //   editTaskList = { editTaskList }/> : '';

    // if (sortBy === 'name' ) {
    //   tasks.sort((a,b) => {
    //     if (a.name > b.name) return sortValue;
    //     else if (a.name < b.name) return -sortValue;
    //     else return 0
    //   });
    // }
    // else {
    //   tasks.sort((a,b) => {
    //     if (a.status > b.status) return -sortValue;
    //     else if (a.status < b.status) return sortValue;
    //     else return 0
    //   });
    // }
   
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className={ isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' :'' }>
            {/* { elmTaskForm } */}
            <TaskForm 
              // onCloseForm = { this.onCloseForm } 
              // onSubmit = { this.onSubmit } 
              // editTaskList = { editTaskList }
            />
          </div>
          <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
            <button type="button" className="btn btn-primary" onClick={ this.onFormToggle }>
              <span className="fa fa-plus mr-5" />Thêm Công Việc
            </button>

            {/* <button type="button" className="btn btn-danger ml-5" onClick={ this.onGenerateData }>
              <span className="fa fa-plus mr-5" />Generate Data
            </button> */}
            <Control 
              onSearch = { this.onSearch } 
              onSort = { this.onSort }
              sortBy = { sortBy }
              sortValue = { sortValue }
            />
            <div className="row mt-15">
              <TaskList 
                // tasks={ tasks } 
                // onUpdateStatus={ this.onUpdateStatus } 
                // onDelete = { this.onDelete } 
                // onUpdate = { this.onUpdate }
                onFilter = { this.onFilter }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditting: state.itemEditting
  };
}

const mapDispatchToProps = (dispatch,props) => {
  return {
    onToggleFrom: () => {
      dispatch(actions.toggleForm())
    },
    onClearTask : (task) => {
      dispatch(actions.editTask(task))
    },
    onOpenFrom: () => {
      dispatch(actions.openForm())
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
