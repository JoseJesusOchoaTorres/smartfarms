import React, { Component } from 'react'
import Button from 'carbon-components-react/lib/components/Button/Button'
import { FileUploaderDropContainer } from 'carbon-components-react/lib/components/FileUploader'
import InlineLoading from 'carbon-components-react/lib/components/InlineLoading'

class SetUploader extends Component {
  constructor() {
    super()
    this.state = {
      images: [],
      feedback: [],
      analysisResults: {},
      pendingAnalysis: 0,
      clean: 1
    }
  }

  analysisResultsDefault = {0: 0, 1: 0}

  validFormats = [
    'image/jpeg',
    'image/png'
  ]

  validCompactedFormats = [
    'application/zip'
  ]

  validFormatsString = this.validFormats.join('-')
  validCompactedFormatsString = this.validCompactedFormats.join('-')

  onAddFiles = (evt, addedFiles) => {
    this.resetForm()
    let feedback = []
    const filesFiltered = addedFiles.addedFiles.filter(file => {
      if (this.validFormatsString.includes(file.type)) {
        file.blob = this.validCompactedFormatsString.includes(file.type) ? 'zip.svg' : URL.createObjectURL(file)
        return true
      } else {
        let f = { type: 'error', message: 'Formato de archivo no valido', name: file.name }
        feedback.push(f)
        return false
      }
    })
    this.setState({feedback: feedback, images: filesFiltered});
  }

  resetForm = (evt) => {
    this.setState({
      images: [],
      feedback: [],
      analysisResults: {},
      pendingAnalysis: 0,
      clean: 1
    })
  }

  handleUpload = (evt) => {
    const length = this.state.images.length

    if (length > 0) {
      this.setState({ feedback: [] })
      this.setState({ pendingAnalysis: length})
      this.setState({ analysisResults: this.analysisResultsDefault})

      this.state.images.forEach((image, i) => {
        this.upload(image, i)
      })
      this.setState({ clean: 0 })
    } else {
      let f = [{ type: 'error', message: 'Primero agrega imagenes' }]
      this.setState({ feedback: f })
    }
  }

  upload = async (file, i) => {
    const url = "https://us-south.functions.cloud.ibm.com/api/v1/web/roberto.ignacio.esparza.soto%40ibm.com_dev/default/sf-predict.json"

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let imgBase64 = await this.toBase64(file)

    var formdata = { img: imgBase64 }

    formdata = JSON.stringify(formdata)

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata
    };

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState(state => {
          this.state.images[i].analysis = result.message
          const images = this.state.images
          return {
            images
          };
        });
        
        const pendingAnalysis = this.state.pendingAnalysis - 1
        this.setState({ pendingAnalysis:pendingAnalysis })

        var analysisResults = {...this.state.analysisResults}
        analysisResults[result.message] =  analysisResults[result.message] + 1
        this.setState({analysisResults})
      })
      .catch(error => {
        console.log('error', error)
      });
  }

  toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  render() {
    return (
      <>
        <div className="bx--row upload-set__row">
          <div className="bx--col-md-2 set-uploader__column-uploader">
            <div className="bx--file__container">
              <div className="set-uploader__uploader-wrapper">
                <FileUploaderDropContainer
                  disabled={this.state.pendingAnalysis > 0}
                  accept={this.validFormats}
                  labelText="Da click aquí o arrastra imagenes para comenzar"
                  multiple
                  capture="camera"
                  className="set-uploader__file-uploader"
                  name="Img"
                  onAddFiles={this.onAddFiles}
                  role=""
                  tabIndex={0}
                />
              </div>
              {!this.state.clean && this.state.pendingAnalysis === 0 ? (
                <Button
                  className="bx--btn--secondary set-uploader__submit-button"
                  onClick={this.resetForm}
                >
                  Limpiar
                </Button>
              ) : (
                <>
                  <Button
                    className="set-uploader__submit-button"
                    disabled={this.state.pendingAnalysis > 0}
                    onClick={this.handleUpload}
                  >
                    Analizar
                  </Button>
                </>
              )}
              <div className="set-uploader__loading-wrapper">
                {this.state.pendingAnalysis > 0 ? (
                  <InlineLoading
                    description="Analizando"
                    iconDescription="Active loading indicator"
                    onSuccess={function noRefCheck() {}}
                    status="active"
                    successDelay={1500}
                  />
                ) : (
                  <>
                    {Object.keys(this.state.analysisResults).length ? (
                      <>
                        <p>
                          <strong>Resultado del analisis</strong>
                        </p>
                        <hr />
                        <p>
                          <strong>Mangos maduros:</strong>{" "}
                          {this.state.analysisResults[0]}
                        </p>
                        <p>
                          <strong>Mangos verdes:</strong>{" "}
                          {this.state.analysisResults[1]}
                        </p>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                )}
              </div>
              <div className="set-uploader__upload-feedback">
                {this.state.feedback.map((item) => {
                  console.log("item.name: ", item);
                  return <FeedbackItem {...item} key={item.message} />;
                })}
              </div>
            </div>
          </div>
          <div className="bx--col-md-6 set-uploader__column-images">
            <div className="bx--row set__row-images ">
              {this.state.images.map((image) => {
                return (
                  <SetImageUploaded
                    image={image}
                    pendingAnalysis={this.state.pendingAnalysis}
                    key={image.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const SetImageUploaded = (img, pendingAnalysis) => {
  const image = img.image
  return (
    <>
      <div className='bx--col-md-2 set__img-container'>
        <div className='set__img-info'>
          <p><strong>{`${image.name}`}</strong></p>
          <p><small>{`Tamaño: ${formatBytes(image.size)}`}</small></p>
        </div>
        <div className="set__img-result" >          
          {(((img.pendingAnalysis > 0) && !(image.analysis)) ? 
            <InlineLoading
              description="Analizando"
              iconDescription="Active loading indicator"
              onSuccess={function noRefCheck(){}}
              status="active"
              successDelay={1500}
            />
            :
            (image.analysis ? <><p>Resultado del analisis:</p><p><strong>Mango {image.analysis === '0' ? 'maduro' : 'verde'}</strong></p></>: <></>)
          )}
          
        </div>
        <div className="set__img-wrapper">
          <img
            className='set__img'
            src={image.blob}
            alt={image.name}
          />
        </div>
      </div>
    </>
  )
}

const FeedbackItem = (item) => {
  if (item.type === 'error') {
    return (
      <>
        <p className='set__feedback-item set__feedback-item-error'><strong>{item.name}</strong> {item.message}</p>
      </>
    )
  }
  if (item.type === 'success') {
    return (
      <>
        <p className='set__feedback-item set__feedback-item-success'><strong>{item.name}</strong> {item.message}</p>
      </>
    )
  }
  if (item.type === 'analizer') {
    return (
      <>
        <p className='set__feedback-item set__feedback-item-success'><strong>{item.name}</strong></p>
        {Object.entries(item.data).map(i => <><p key={item.name + i[0]}><strong>{i[0]}:</strong> {i[1]}</p></>)}
      </>
    )
  }
}

function formatBytes(a, b) { if (0 === a) return "0 Bytes"; var c = 1024, d = b || 2, e = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], f = Math.floor(Math.log(a) / Math.log(c)); return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f] }

export default SetUploader
