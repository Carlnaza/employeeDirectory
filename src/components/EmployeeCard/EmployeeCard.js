import React from 'react'

const EmployeeCard = props => {
    return (
        <div className="uk-inline-flex uk-card uk-card-default uk-card-body uk-width-1-6@l uk-width-1-4@m uk-width-1-1@s uk-margin-left uk-margin-right uk-margin-small">
            <h3 className="uk-card-title uk-margin-small-left uk-margin-small-right uk-text-capitalize">{props.empInfo.username}</h3>
            <p>{`${props.empInfo.first_name + ' ' + props.empInfo.last_name}`}</p>
            <p className="uk-text-truncate">{props.empInfo.email}</p>
        </div>
    )
}

export default EmployeeCard