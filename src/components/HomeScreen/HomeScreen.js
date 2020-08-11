import React from 'react'
import { Grid, Paper, Button, makeStyles } from '@material-ui/core/'
import './HomeScreen.css'
import SearchBar from 'material-ui-search-bar'
import json from '../../data/test1.json'
import Document from '../../model/Document'

const useStyles = makeStyles(theme => ({
    paperRoot: {
        backgroundColor:"red"
    }
}));

function HomeScreen() {
    let documents = getDocumentList();
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
            <DocumentGrid className="DocumentGrid" documentList={getDocumentList()} />
            <Paper>
                <h1> test 2 </h1>
            </Paper>
        </div>
    );
}

class DocumentItem extends React.Component {
    render() {
        return (
            <div className="DocumentItem">
                <Paper 
                    className={classes.paperRoot}>
                    <h1 className="DocumentTitle"> test 1 </h1>
                </Paper>
            </div>
        );
    }
}

class DocumentGrid extends React.Component {
    render() {
        return (
            <div className="DocumentGrid">
                <Grid container spacing={3} className="DocumentGrid">
                    <Grid item xs={12}>
                        <DocumentItem
                            document={this.props.documentList[0]}
                             />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

function getDocumentList() {
    return [json];
}

export default HomeScreen;