import React from 'react'
import SetUploader from '../../components/SetUploader'

const UploadPage = () => {
  return (
    <div className='bx--grid bx--grid--full-width upload-page'>
      <div className='bx--row set__row-title'>
        <h2 className='set__title'><strong>Analizar imágenes</strong></h2>
      </div>
      <p>En esta sección puedes agregar imagenes de mangos para determiniar si esta "Maduro" o "Verde".</p>
      <SetUploader />
    </div>
  )
}

export default UploadPage
