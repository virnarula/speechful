import React from 'react'
import './HomeScreen.css'
import json from '../../data/test1.json'
import logo from '../../res/logo.svg'

function HomeScreen() {
    let documents = getDocumentList();
    return (
        <div className="HomeScreen">
            <header>
                <img src={logo}></img>
                <h1 className="SpeechfulHeader"> Speechful </h1>
                <h1> Documents </h1>
            </header>
            <DocumentGrid documentList={getDocumentList()} />
        </div>
    );
}

class DocumentItem extends React.Component {
    render() {
        return (
            <a href={getDocumentUrl(this.props.document.id)} style={{textDecoration: 'none'}}>
                <div className="DocumentItem" >
                    <h1 className="DocumentTitle"> {this.props.document.title} </h1>
                    <p>Edited: </p>
                    <p>Created: </p>
                    <p><br /></p>
                    <p>Words: </p>
                    <p>Paragraphs: </p>
                    {/* <a href={getDocumentUrl(this.props.document.id)}>Open file</a> */}
                </div>
            </a>
        );
    }
}

class CreateDocumentItem extends React.Component {
    render() {
        return (
            <div className="CreateDocumentItem">
                <h1> + </h1>
                <h2>Create New Document</h2>
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
                <CreateDocumentItem />
                {
                    this.props.documentList.map((p, i) => {
                        return <DocumentItem document={p} />
                    })
                }
            </div>
        );
    }
}

function getDocumentList() {
    return [json, json];
}

export default HomeScreen;
