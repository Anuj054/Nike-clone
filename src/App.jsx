import React from 'react';
import { FlexContent, Hero ,Sales} from './components';
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
     </main>
    </div>
  )
}

export default App
