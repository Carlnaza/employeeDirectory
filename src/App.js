import React, { Component } from 'react';
import Card from './components/EmployeeCard';
import Form from './components/Form'
import db from './db/db.json';

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
    console.log(this.state.input)
    this.setState({ searchInp: this.state.input, input: '', category: '', categorySel: this.state.category })
  }

  handleSelectChange = event => {
    let newCat = event.target.value
    this.setState({ category: newCat.toLowerCase() })
  }

  renderEmployees(cat) {
    if (this.state.searchInp !== '') {
      // eslint-disable-next-line
      return db.map((emp, i) => {
        if (cat === 'department') {
          if (emp.department === this.state.searchInp) {
            return <Card emp={emp} key={i} />
          }
        } else {
          if (emp.country === this.state.searchInp) {
            return <Card emp={emp} key={i} />
          }
        }
      })
    } else {
      return db.map((emp, i) => <Card emp={emp} key={i} />)
    }
  }

  render() {

    return (
      <>
        <div className="uk-container">
          <Form
            input={this.state.input}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            handleSelectChange={this.handleSelectChange}
          />
          <div className="uk-row uk-margin-top uk-margin-bottom">
            {this.renderEmployees(this.state.categorySel)}
          </div>
        </div>
      </>
    );
  }
}

export default App;