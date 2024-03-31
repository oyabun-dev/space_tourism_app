import React from 'react'

export default function PageTitle(props) {
    return (
        <h5 className='pageTitle'>
            <b> {props.id} </b>
            {props.title}
        </h5>
    )
}