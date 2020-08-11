import React from 'react'
import Button from '@material-ui/core/Button'
import logo from "../../res/logo.png"
import './StartPage.css'
import StartDictaphone from '../../speech/StartDictaphone'

function StartPage() {
  return (
    <div className="StartPage">
      <header className="App-header">
        <h3> Say "Hello"</h3>
          <StartDictaphone />
      </header>
      <Button
        variant='contained'
        color="primary"
        href="/home">
        Or click here to get started
      </Button>
    </div>
  );
}

export default StartPage;
