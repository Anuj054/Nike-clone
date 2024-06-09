import React from 'react';
import { FlexContent, Hero ,Sales, Stories} from './components';
import {heroapi , popularsales,toprateslaes,highlight,sneaker} from './data/data';
const App = () => {
  return (
    <div>
     <main className=' flex flex-col relative gap-16'>
      <Hero heroapi={heroapi}/>
      <Sales  endpoint ={popularsales} ifExists />
      <FlexContent endpoint={highlight} ifExists/>
      <Sales endpoint= {toprateslaes} />
      <FlexContent endpoint={sneaker}/> 
      <Stories/>
     </main>
    </div>
  )
}

export default App
