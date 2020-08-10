import React from 'react'
import Button from '@material-ui/core/Button'
import './StartPage.css'

function StartPage () {
    return (
    <div className="StartPage">
      <header className="App-header">
        <p> Welcome to Speechful!</p>
          <Button
            variant='contained'
            color="primary"
            href="/home">
            Click Here to get started
          </Button>
      </header>
    </div>
    );
}

export default StartPage;