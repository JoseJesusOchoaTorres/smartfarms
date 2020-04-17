import React from 'react'
import SetUploader from '../../components/SetUploader'

const sets = [
  {
    name: 'Random',
    images: [
      {
        id: '1',
        author: 'Alejandro Escamilla',
        width: 5616,
        height: 3744,
        url: 'https://unsplash.com/photos/LNRyGwIJr5c',
        download_url: 'https://picsum.photos/id/1/5616/3744'
      }
    ]
  }
]
const set = sets[0]

const UploadPage = () => {
  return (
    <div className='bx--grid bx--grid--full-width upload-page'>
      <div className='bx--row set__row-title'>
        <h2 className='set__title'><strong>Subir imágenes / {set.name}</strong></h2>
      </div>
      <SetUploader {...set} />
    </div>
  )
}

export default UploadPage
