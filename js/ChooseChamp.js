import React from 'react';

function decideWinner(userTool, machineTool) {
   let champion = '';
   if (userTool == machineTool && userTool !== '') {
      champion = 'Even Steven';
   }
   else if (userTool == 'Rock') {
      if (machineTool == 'Paper') {
         champion = 'The Machine beat you.';
      }
      else if (machineTool == 'Scissors') {
         champion = 'You beat the machine!';
      }
      else if (machineTool == 'Lizard') {
         champion = 'You beat the machine!';
      }
      else {
         champion = 'The Machine beat you.';
      }
   }
   else if (userTool == 'Paper') {
      if (machineTool == 'Scissors') {
         champion = 'The Machine beat you.';
      }
      else if (machineTool == 'Lizard') {
         champion = 'The Machine beat you.';
      }
      else if (machineTool == 'Spock') {
         champion = 'You beat the machine!';
      }
      else {
         champion = 'You beat the machine!';
      }
   }
   else if (userTool == 'Scissors') {
      if (machineTool == 'Lizard') {
         champion = 'You beat the machine!';
      }
      else if (machineTool == 'Spock') {
         champion = 'The Machine beat you.';
      }
      else if (machineTool == 'Rock') {
         champion = 'The Machine beat you.';
      }
      else {
         champion = 'You beat the machine!';
      }
   }
   else if (userTool == 'Lizard') {
      if (machineTool == 'Spock') {
         champion = 'You beat the machine!';
      }
      else if (machineTool == 'Rock') {
         champion = 'The Machine beat you.';
      }
      else if (machineTool == 'Paper') {
         champion = 'You beat the machine!';
      }
      else {
         champion = 'The Machine beat you.';
      }
   }
   else if (userTool == 'Spock') {
      if (machineTool == 'Rock') {
         champion = 'You beat the machine!';
      }
      else if (machineTool == 'Paper') {
         champion = 'The Machine beat you.';
      }
      else if (machineTool == 'Scissors') {
         champion = 'You beat the machine!';
      }
      else {
         champion = 'The Machine beat you.';
      }
   }
   
   return champion;
}

function ChooseChamp(props) {
   const won = decideWinner(props.user, props.machine)

   return (
      <article className = "results-section">
         <section className = "results-content">
            <h2>Result: { won }</h2>
            <p>You chose: { props.user }</p>
            <p>The machine chose: { props.machine }</p>
         </section>
      </article>
   )
}

export default ChooseChamp;