import React from 'react'
import './HomeScreen.css'
import json from '../../data/test2.json'
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
                    <p>{this.props.document.paragraphs[0].text.substring(0, 50)}...</p>
                    <br /> 
                    <p>Words: {this.props.document.paragraphs.map(e => e.text.split(" ").length).reduce((acc, c) => acc + c)}</p>
                    <p>Paragraphs: {this.props.document.paragraphs.length}</p>
                </div>
            </a>
        );
    }
}

class CreateDocumentItem extends React.Component {
    render() {
        return (
            <div className="CreateDocumentItem DocumentItem">
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
    return [json, json, json, json, json, json];
}

export default HomeScreen;
