import React from 'react'
import Button from '@material-ui/core/Button'
import './StartPage.css'
import StartDictaphone from '../../speech/StartDictaphone'

function StartPage () {
    return (
    <div className="StartPage">
      <header className="App-header">
        <h3> Say "Hello" to get started!</h3>
          <StartDictaphone />
      </header>
    </div>
    );
}

export default StartPage;