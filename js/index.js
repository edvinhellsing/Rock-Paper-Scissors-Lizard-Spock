import React from 'react';
import ReactDOM from 'react-dom';

import ChooseTool from "./ChooseTool";
import ChooseChamp from "./ChooseChamp";

class App extends React.Component {
   constructor() {
      super();

      this.state = {
         user: '',
         machine: ''
      }

      this.handleClick = this.handleClick.bind(this);
   }

   randomMachineTool() {
      let machineTool = '';
      const randomNumber = Math.round(Math.random() * 2);

      if (randomNumber == 0) {
         machineTool = "Rock";
      }
      else if (randomNumber == 1) {
         machineTool = "Paper";
      }
      else if (randomNumber == 2) {
         machineTool = "Scissors";
      }
      else if (randomNumber == 3) {
         machineTool = "Lizard";
      }
      else if (randomNumber == 4) {
         machineTool = "Spock";
      }

      this.setState( { machine: machineTool });
   }

   handleClick(event) {
      this.setState({ user: event.target.value })

      this.randomMachineTool();
   }

   render() {
      return (
         <article>
            <section>
               <h1>Rock Paper Scissors Lizard Spock</h1>
            </section>
            <section className = "rules-section">
               <h2>Game Rules</h2>
               <p>Play the classic game Rock Paper Scissors Lizard Spock against the machine. Just press a button, and see if you can beat the machine.</p>
               <p>Who wins? Well, Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard, Lizard poisons Spock, Spock smashes Scissors, Scissors decapitates Lizard, Lizard eats Paper, Paper disproves Spock, Spock vaporizes Rock and, as it always has, Rock crushes Scissors.</p>
            </section>
            <section>
               <ChooseTool select = { this.handleClick }/>
               <ChooseChamp user = { this.state.user } machine = { this.state.machine } />
            </section>
         </article>
      )
   }
}

ReactDOM.render(<App />, document.getElementById('root'));