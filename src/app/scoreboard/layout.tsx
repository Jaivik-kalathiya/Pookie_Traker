
import React from 'react'

interface ScoreBoardlayputProps {
    children: React.ReactNode;
  }

const ScoreBoardlayput = ({ children }:ScoreBoardlayputProps) => {
  return (      
    <div className='bg-slate-400'>
        {children}
    </div>
    
  )
}

export default ScoreBoardlayput;