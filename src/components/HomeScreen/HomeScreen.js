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
        </div>
    );
}

class DocumentItem extends React.Component {
    render() {
        return (
            <div className="DocumentItem">
                <Paper 
                    className="DocumentPaper">
                    <h1 className="DocumentTitle"> { this.props.document.title } </h1>
                    <a href={getDocumentUrl(this.props.document.id)}>Open file</a>
                </Paper>
            </div>
        );
    }
}

function getDocumentUrl(id) {
    return "/document/:" + id.toString();
}

class DocumentGrid extends React.Component {


    render() {
        return (
            <div className="DocumentGrid">
                <Grid container spacing={3} className="DocumentGrid">
                    <Grid item xs={12}>
                        {
                            this.props.documentList.map((p, i) => {
                                return <DocumentItem document={p}/>
                            })
                        }
                    </Grid>
                </Grid>
            </div>
        );
    }
}

function getDocumentList() {
    return [json, json];
}

export default HomeScreen;
