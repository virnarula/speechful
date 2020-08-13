import React from 'react'
import './HomeScreen.css'
import jsonData from '../../data/test2.json'
import logo from '../../res/logo.svg'
import HomeDictaphone from '../../speech/HomeDictaphone'

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            documents: getDocumentList()
        }
    }

    documentListChange = (d) => {
        this.setState({
          documents: d
        })
    }

    saveDocuments = () => {
        localStorage.documents = JSON.stringify(this.state.documents);
        console.log("Document Saved");
    }

    render() {
        return (
            <div className="HomeScreen">
                <header>
                    <img src={logo}></img>
                    <h1 className="SpeechfulHeader"> Speechful </h1>
                    <h1> Documents </h1>
                </header>
                <DocumentGrid documentList={this.state.documents} 
                documentListChangeHandler={this.documentListChange}
                saveHandler={this.saveDocuments}/>
                <HomeDictaphone actionHandler={actionHandler}/>
            </div>
        );
    }
}

class DocumentItem extends React.Component {
    render() {
        return (
            <a href={getDocumentUrl(this.props.document.id)} style={{textDecoration: 'none'}}>
                <div className="DocumentItem" >
                    <h1 className="DocumentTitle"> {this.props.document.title} </h1>
                    <p>{this.props.document.paragraphs[0].text.substring(0, 50)}...</p>
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
    return "/document/" + id.toString();
}

class DocumentGrid extends React.Component {
    render() {
        return (
            <div className="DocumentGrid">
                <CreateDocumentItem />
                {
                    this.props.documentList.map((p, i) => {
                        return <DocumentItem key={i} document={p} />
                    })
                }
            </div>
        );
    }
}

function actionHandler(action) {
    console.log(action)
}

function getDocumentList() {
    


    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    if (i == 0) {
        console.log("Added example doc");
        localStorage.setItem("doc"+jsonData.id, JSON.stringify(jsonData));
        keys = Object.keys(localStorage);
        i = keys.length;
    }

    while ( i-- ) {
        values.push( JSON.parse(localStorage.getItem(keys[i])) );
    }

    return values;
}

export default HomeScreen;
