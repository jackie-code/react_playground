import React from 'react';
import './Tooltip.css';

function Tooltip(props) {
    return (
      <span className='Tooltip'>
          {/* text that displays */}
        <span className='Tooltip-content'> 
          {props.children}
        </span>
          {/* message that appears on hover */}
        <div className='Tooltip-message'>
          {props.message}
        </div>
      </span>
    )
  }

export default Tooltip;