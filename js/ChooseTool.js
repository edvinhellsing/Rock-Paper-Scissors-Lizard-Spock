import React from 'react';
import { render } from 'react-dom';

function ChooseTool(props) {
   return (
      <section className = "btn-section">
         <button className = "tool-btn" value = "Rock" onClick = { props.select }>Rock</button>
         <button className = "tool-btn" value = "Paper" onClick = { props.select }>Paper</button>
         <button className = "tool-btn" value = "Scissors" onClick = { props.select }>Scissors</button>
         <button className = "tool-btn" value = "Lizard" onClick = { props.select }>Lizard</button>
         <button className = "tool-btn" value = "Spock" onClick = { props.select }>Spock</button>
      </section>
   )
}

export default ChooseTool;