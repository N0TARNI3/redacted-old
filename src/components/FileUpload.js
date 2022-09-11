import React from 'react'
import logo from '../img/logo.svg'
import folder from '../img/folder.png'
import H4 from './tokens/H4'
import Button from './tokens/Button'
import Label from './tokens/Label'
import H1 from './tokens/H1'

const FileUpload = () => {
  return (
    <div className="flex">
        <div className='row'>
            <H1 text="Welcome to"/>
            <img src={logo} className="logo" />
        </div>
        <div className='flex file-upload'>
            <img src={folder} height="64px"/>
            <H4 text="Drag and drop your EHR in PDF format here to start uploading" align="center"/>
            <Label text="OR" type="lbl-light" />
            <Button title="Browse Files" type="btn-primary"/>
        </div>
    </div>
  )
}

export default FileUpload