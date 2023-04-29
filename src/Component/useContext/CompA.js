import React, { createContext } from 'react'
import CompB from './CompB'


const BioData = createContext();




function CompA() {
  
    
    

  return (
    <>
    <BioData.Provider value={"YO BRO"}>
        <CompB/>
    </BioData.Provider>
    </>
  )
}

export default CompA
export {BioData};


//context API has context, provider and consumer
// consumer part is lengthy
// we reduce the consumer to useContext
// in place of consumer we use useContext
