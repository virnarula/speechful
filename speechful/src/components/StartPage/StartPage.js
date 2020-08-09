import React from 'react'
import './StartPage.css'
import Button from '@material-ui/core/Button'

function StartPage () {
    return (
    <div className="StartPage">
      <header className="App-header">
        <p> Welcome to Speechful!</p>
          <Button
            variant='contained'
            color="primary"
            to="/home">
            Click Here to get started
          </Button>
      </header>
    </div>
    );
}

export default StartPage;