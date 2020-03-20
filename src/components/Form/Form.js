import React from 'react'
import './form.css'

const Form = props => {
    return (
        <div className="uk-card uk-card-body uk-width-1-3@l uk-width-1-3@m uk-width-1-1@s" >
            <h1 className="uk-text-header uk-text-muted uk-text-large uk-text-light">Search by Department</h1>
            <form >
                <label htmlFor="input">Employee Search</label>
                <input
                    type="text"
                    className="uk-input hw-border-radius"
                    name="input"
                    value={props.input}
                    onChange={props.handleInputChange}
                />
                <select className="uk-select uk-margin-small-top hw-border-radius"
                    onChange={props.handleSelectChange}>
                    <option>Country</option>
                    <option>Department</option>
                </select>
                <button className="uk-button uk-button-primary uk-margin-small-top hw-border-radius" onClick={props.handleFormSubmit}>Search</button>
            </form>
        </div>
    )
}

export default Form