import React, { Component } from 'react'
import Button from 'carbon-components-react/lib/components/Button/Button'
import { FileUploaderDropContainer } from 'carbon-components-react/lib/components/FileUploader'

class SetUploader extends Component {
  constructor () {
    super ()
    this.state = {
      name: 'Random',
      images: [ ],
      feedback: []
    }
  }

  validFormats = [
    'image/jpeg',
    'image/png',
    'application/zip'
  ]
  validCompactedFormats = [
    'application/zip'
  ]

  validFormatsString = this.validFormats.join('-')
  validCompactedFormatsString = this.validCompactedFormats.join('-')

  onAddFiles = (evt, addedFiles) => {
    let feedback = []
    const filesFiltered = addedFiles.addedFiles.filter(file => {
      if(this.validFormatsString.includes(file.type)){
        file.blob = this.validCompactedFormatsString.includes(file.type) ? 'zip.svg' : URL.createObjectURL(file)
        return true
      } else{
        let f = {type: 'error', message: 'Formato de archivo no valido', name:file.name}
        feedback.push(f)
        return false
      }
    })
    this.setState({feedback: feedback, images: filesFiltered})
  }

  handleUpload = (evt) => {
    if(this.state.images.length > 0){
      this.setState({feedback: []})
      this.state.images.forEach(imagen => {
        this.upload(imagen)
      })
    } else {
      let f = [{type: 'error', message: 'Primero agrega imagenes'}]
      this.setState({feedback: f})
    }
  }

  upload = (file) => {
    const ClientID = 'e4142e156e13837'
    const Clientsecret = 'd68bee62c0c90e5cc5c7b607a9a5254b4e36059b'

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Client-ID " + ClientID);
    
    var formdata = new FormData();
    formdata.append("image", file);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("https://api.imgur.com/3/image", requestOptions)
      .then(response => response.json())
      .then(result => {
        let f = {}
        if(result.success === false) {
          if(result.data.error.code === 1003) {
            f = {type: 'error', message: 'Formato de archivo no aceptado por el servidor', name:file.name}
          }
        }
        if(result.success === true) {
          f = {type: 'success', message: 'Imagen subida', name:file.name}
        }
        this.setState(state => {
          const feedback = [...state.feedback, f];
          return {
            feedback
          };
        });
    
      })
      .catch(error => {
        console.log('error', error)
      });
  }

  render () {
    return (
      <>
        <div className='bx--row upload-set__row'>
          <div className='bx--col-md-2 set-uploader__column-uploader'>
            <div className='bx--file__container'>
              <div className='set-uploader__uploader-wrapper'>
                <FileUploaderDropContainer
                  accept={this.validFormats}
                  labelText='Arrastra las imagenes o da click'
                  multiple
                  className='set-uploader__file-uploader'
                  name='Img'
                  onAddFiles={this.onAddFiles}
                  role=''
                  tabIndex={0}
                />
              </div>
              <Button className='set-uploader__submit-button' onClick={this.handleUpload}>Subir</Button>
              <div className='set-uploader__upload-feedback'>
                {this.state.feedback.map(item => {
                  return (
                    <FeedbackItem {...item} key={item.name} />
                  )
                })}
              </div>
           </div>
          </div>
          <div className='bx--col-md-6 set-uploader__column-images'>
            <div className='bx--row set__row-images '>
              {this.state.images.map(image => {
                return (
                  <SetImageUploaded image={image} key={image.name} />
                )
              })}
            </div>
          </div>
        </div>
      </>
    )
  }
}

const SetImageUploaded = (img) => {
  const image = img.image
  return (
    <>
      <div className='bx--col-md-2 set__img-container'>
        <div className='set__img-info'>
          <p><strong>{`${image.name}`}</strong></p>
          <p><small>{`Tamaño: ${formatBytes(image.size)}`}</small></p>
        </div>
        <img
          className='set__img'
          src={image.blob}
          alt={image.name}
        />
      </div>
    </>
  )
}

const FeedbackItem = (item) => {
  if(item.type === 'error'){
    return (
      <>
        <p className='set__feedback-item set__feedback-item-error'><strong>{item.name}</strong> {item.message}</p>
      </>
    )
  } else {
    return (
      <>
        <p className='set__feedback-item set__feedback-item-success'><strong>{item.name}</strong> {item.message}</p>
      </>
    )
  }
}

function formatBytes(a,b){if(0==a)return"0 Bytes";var c=1024,d=b||2,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));return parseFloat((a/Math.pow(c,f)).toFixed(d))+" "+e[f]}

export default SetUploader
