import React from 'react';

import './styles.scss'

function Art({ children }) {
    return (
        <div className='art'>
            { children }
        </div>
    )
}

export default Art;