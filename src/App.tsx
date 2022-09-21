import React from 'react';
import './App.css';
import {LoremImpsum} from "./LoremImpsum";
import {Breakpoint} from "./Breakpoint";
import {KitchenSink} from "./KitchenSink";

function App() {
  return <div className="flex flex-col h-screen overflow-y-hidden">
    <header className="flex-shrink-0 shadow-2xl bg-slate-900 sticky w-100 border-b-2 border-slate-800">
      <nav>
        <ul className="flex flex-row p-5 text-xl">
          <li className="mr-2">Home</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
    <main className="flex-grow overflow-y-auto p-10">
      {/*<LoremImpsum /><br/>*/}
      <KitchenSink />
    </main>
    <footer className="flex-shrink-0 bg-slate-900 border-t-2 border-slate-800 shadow-2xl">
      <nav>
        <ul className="flex flex-row p-5 text-sm">
          <li className="mr-2">Copyright</li>
          <li className="mr-2">Imprint</li>
          <li>Privacy Policy</li>
        </ul>
      </nav>
    </footer>
    <Breakpoint />
  </div>
}

export default App;
