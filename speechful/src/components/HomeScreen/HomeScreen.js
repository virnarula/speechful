import React from 'react'
import {Grid, Paper} from '@material-ui/core/'
import './HomeScreen.css'
import Document from '../../model/Document'

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

function HomeScreen () {
    var documents = getDocumentList();
    return (
        <div className="HomeScreen">
            <h1> Documents </h1>
            getDocumentItems(documents);
        </div>
    );
}

export default HomeScreen;