import React from 'react'
import Button from '@material-ui/core/Button'
import { famicrophone } from "@fortawesome/free-solid-svg-icons";
import { fontawesomeicon } from "@fortawesome/react-fontawesome";
import './StartPage.css'
import StartDictaphone from '../../speech/StartDictaphone'

function StartPage() {
  return (
    <div className="StartPage">
      <h1 >Say "Hello"</h1>
      <header className="App-header">
        <StartDictaphone />
      </header>
    </div>
  );
}

export default StartPage;
