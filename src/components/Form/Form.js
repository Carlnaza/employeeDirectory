import React from 'react'
import './form.css'

const Form = props => {
        return (
            <div className="uk-card uk-card-body uk-width-1-3@l uk-width-1-3@m uk-width-1-1@s" >
                <h1 className="uk-text-header uk-text-muted uk-text-large uk-text-light">Enter Employee Information</h1>
                <form >
                    <select
                        className="uk-select hw-border-radius"
                        name="first_name"
                        value={props.formValue.first_name}
                        onChange={props.inputChange}
                    >
                        <option>Department</option>
                        <option>Gender</option>
                    </select>
                    <button 
                        className="uk-button uk-button-primary hw-border-radius uk-margin-small-top uk-width-1-1"
                        onClick={props.formSubmit}
                        >Submit
                        </button>
                </form>
            </div>
        )
}

export default Form