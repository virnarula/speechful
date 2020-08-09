import React from 'react'
import {Grid, Paper, Button} from '@material-ui/core/'
import './HomeScreen.css'
import SearchBar from 'material-ui-search-bar'
import Document from '../../model/Document'

function HomeScreen () {
    var documents = getDocumentList();
    return (
        <div className="HomeScreen">
            <h1> Documents </h1>
            <SearchBar 
                className="SearchBar"
                />
            <Button
                variant="contained"
                color="primary"
                href="/document">
                + Create New Document
            </Button>
        </div>
    );
}

class DocumentItem extends React.Component {
    constructor(document) {
        this.document = document;
    }
    render() {

        return (
            <Paper>
                
            </Paper>
        );
    }
}

function getDocumentList() {
    return [];
}

function getDocumentItems(documentList) {
    return (
    <Grid>
        <DocumentItem>

        </DocumentItem>
    </Grid>
    );
}

export default HomeScreen;