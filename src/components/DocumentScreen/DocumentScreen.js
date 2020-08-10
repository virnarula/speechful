import React from 'react'
import json from '../../data/test1.json'
import Document from '../Document/Document'
function DocumentScreen () {
    return <Document document={json} />
}

export default DocumentScreen;
