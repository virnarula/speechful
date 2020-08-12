import React from 'react'
import Button from '@material-ui/core/Button'
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../res/logo.png"
import './StartPage.css'
import StartDictaphone from '../../speech/StartDictaphone'

function StartPage() {
  return (
    <div className="StartPage">
      <h1 >Say "Hello"</h1>
      <header className="App-header">
        <StartDictaphone />
      </header>
      <div className="circle">
        <FontAwesomeIcon icon={faMicrophone} />
      </div>
    </div>
  );
}

export default StartPage;
