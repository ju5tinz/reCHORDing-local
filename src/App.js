import React, {Component} from 'react';
import FretboardFig from './features/Fretboard/Fretboard'
import { ChordsList } from './features/chords/ChordsList'

class App extends Component {
  render() {
    return(
      <div className="App">
        <div className="content">
          <FretboardFig 
            width="200"
            height="400"
            numStrings="6"
            numFrets="6"
          />
          
          <ChordsList />
        </div>
      </div>
    );
  }
}

export default App;
