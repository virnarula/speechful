import { readFile, readdir, exists, writeFile } from 'fs'

function readDocumentFromFile(id) {
    let filePath = "../data/" + id.toString() + ".json";
    let file;
    if (!exists(filePath)) {
        throw "File with id [" + id.toString() + "] not found"
    }
    file = JSON.parse(readFile(filePath))
    return file;
}

function getDocumentIds() {
    let filePath = "../data/";
    readdir(filePath, (err, files) => {
        if(err) {
            throw "Error reading file path"
        } else {
            return files;
        }
    })
}

function saveExistingDocument(document) {
    let filePath = "../data/" + document.id.toString + ".json";
    writeFile(filePath, JSON.stringify(document), (err) => {
        if (err){
            throw "Error writing file";
        }
    });
}

function saveNewDocument(document) {
    document.id = getNextId();
    saveExistingDocument(document);
}

function getNextId(){
    return getDocumentIds().size() + 1;
}
