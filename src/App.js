import React, { Component } from 'react';
import Form from './components/Form'
import EmployeeCard from './components/EmployeeCard'
import employeeJSON from './db/employees.json'

const employeeList = employeeJSON

class App extends Component {

  state = {
    first_name: ' ', 
    last_name: ' ',
    username: ' ',
    email: ' ',
    password: ' ',
    fname: ' ',
    lname: ' ',
    uname: ' ',
    em: ' ',
    pwd: ' '
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    this.setState({
      fname: this.state.first_name,
      lname: this.state.last_name,
      uname: this.state.username,
      em: this.state.email,
      pwd: this.state.password,
      first_name: ' ',
      last_name: ' ',
      username: ' ',
      email: ' ',
      password: ' '
    })
  }

  render() {
    return (
      <>
        <div className="uk-flex uk-flex-center">
          <Form
            formValue={this.state}
            inputChange={this.handleInputChange}
            formSubmit={this.handleFormSubmit}
          />
        </div>
        <div>
          <h2 className="uk-text-muted uk-text-center uk-text-light">Current Employees</h2>
            <ul>
              {employeeList.map(info => <EmployeeCard empInfo={info} />)}
            </ul>
        </div>
      </>
    )
  }
}

export default App;
