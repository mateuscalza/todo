import React from 'react'

export default function Button({ text, onClick, disabled }) {
    return (
        <button onClick={onClick} disabled={disabled} className='red'>{text}</button>
    )
}

