import React from "react";
import { FlexContent, Footer, Hero, NavBar, Sales, Stories } from "./components";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data";
const App = () => {
  return (
    <div>
      <NavBar/>
      <main className=" flex flex-col relative gap-16">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI ={footerAPI}/>
    </div>
  );
};

export default App;
