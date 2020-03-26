import React from 'react'

const EmployeeCard = props => {
    return (
        <div className="uk-inline-flex uk-card uk-card-default uk-card-body uk-width-1-4@l uk-width-1-4@m uk-width-1-1@s uk-margin-left uk-margin-right uk-margin-small">
            <p>Department: {props.emp.department}</p>
            <p>Name: {`${props.emp.first_name + ' ' + props.emp.last_name}`}</p>
            <p>Email: {props.emp.email}</p>
            <p>Country: {props.emp.country}</p>
        </div>
    )
}

export default EmployeeCard