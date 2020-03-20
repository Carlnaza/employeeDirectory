import React, { Component } from 'react'
import Form from './components/Form'
import EmployeeCard from './components/EmployeeCard'
import db from './db/employees.json'

class App extends Component {

  state = {
    searchInp: '',
    input: '',
    category: 'country',
    categorySel: ''
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    this.setState({ searchInp: this.state.input, input: '', category: '', categorySel: this.state.category })
  }

  handleSelectChange = event => {
    this.setState({ category: (event.target.value).toLowerCase() })
  }

  renderEmployees (cat) {
    if(this.state.searchInp !== '') { 
    return db.map((emp, i) => {
     if(cat === 'department'){
       if(emp.department === this.state.searchInp){
         return <EmployeeCard emp={emp} key={i} />
       } 
      } else {
        if (emp.country === this.state.searchInp) {
          return <EmployeeCard emp={emp} key={i} />
        }
      }
     })
    }
    else {
     return db.map((emp, i) => <EmployeeCard emp={emp} key={i} />)
    }
  }

  render() {
    return (
      <>
        <div className="uk-flex uk-flex-center">
          <Form
            input={this.state.input}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            handleSelectChange={this.handleSelectChange}
          />
        </div>
        <div>
          <h2 className="uk-text-muted uk-text-center uk-text-light">Current Employees</h2>
          <ul>
            {this.renderEmployees(this.state.category)}
          </ul>
        </div>
      </>
    )
  }
}

export default App;
