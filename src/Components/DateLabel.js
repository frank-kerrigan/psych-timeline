import React from 'react'

export const DateLabel = ({ text }) =>  {
  
    const style = {
        fontSize: '26px',
        fontWeight: 'bold',
    };
    
  return <span style={style} >{text}</span>;
};

