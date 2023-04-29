import React, { useContext } from 'react'
import { BioData } from './CompA';

function CompC() {
   
   const myName = useContext(BioData);

  return (
    <div>
      <h1>{myName}</h1>
    </div>
  )
}

export default CompC
