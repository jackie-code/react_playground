import React, { Component } from 'react';
import { fraction, add, format } from 'mathjs';
import moment from 'moment';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';


const firstTooltip = (
  <Tooltip message='tooltip message'>
   ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip message='another tooltip message'>
    officiis
  </Tooltip>
)

function App() {
  return (
    <main className='App'>
      <Split className="left" flexBasis='2'>This is the content for the LEFT 'split'<br />
      <Tooltip message='one more tooltip message'>
          Necessitatibus?
      </Tooltip>
      </Split>
      <Split className="right">This is the content for the RIGHT 'split'</Split>
      <Split />
    </main>
  )
}



export default App;