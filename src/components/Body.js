import React from 'react'
import './css/body.css'
import PropTypes from 'prop-types'


export default function Body(props) {
    return (
        <div className='body'>
            <a href="./">{props.name}</a>            
        </div>
    )
}

Body.propTypes = {
    // name : PropTypes.string
    name : PropTypes.string.isRequired
}


Body.defaultProps = {
    name : "Tour & Trek"
}