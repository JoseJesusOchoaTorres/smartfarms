import React from 'react';
import { Set } from '../../components/Set';

const sets = [
  {
    name: 'Random',
    url: 'mangos/Maduros/',
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
  },
  {
    name: 'Maduros',
    url: 'mangos/maduros/',
    images: [
      { name: '1.jpg', width: '168', height: '150' },
      { name: '10.jpg', width: '103', height: '122' },
      { name: '11.jpg', width: '104', height: '115' },
      { name: '12.jpg', width: '94', height: '87' },
      { name: '13.jpg', width: '206', height: '206' },
      { name: '14.jpg', width: '206', height: '206' },
      { name: '15.jpg', width: '206', height: '206' },
      { name: '16.jpg', width: '206', height: '206' },
      { name: '17.jpg', width: '206', height: '206' },
      { name: '18.jpg', width: '206', height: '206' },
      { name: '19.jpg', width: '206', height: '206' },
      { name: '2.jpg', width: '164', height: '118' },
      { name: '21.jpg', width: '206', height: '206' },
      { name: '22.jpg', width: '206', height: '206' },
      { name: '23.jpg', width: '206', height: '206' },
      { name: '24.jpg', width: '206', height: '206' },
      { name: '25.jpg', width: '206', height: '206' },
      { name: '26.jpg', width: '206', height: '206' },
      { name: '27.jpg', width: '206', height: '206' },
      { name: '28.jpg', width: '206', height: '206' },
      { name: '29.jpg', width: '206', height: '206' },
      { name: '3.jpg', width: '109', height: '134' },
      { name: '30.jpg', width: '206', height: '206' },
      { name: '31.jpg', width: '206', height: '206' },
      { name: '32.jpg', width: '206', height: '206' },
      { name: '33.jpg', width: '206', height: '206' },
      { name: '34.jpg', width: '206', height: '206' },
      { name: '35.jpeg', width: '206', height: '206' },
      { name: '36.png', width: '206', height: '206' },
      { name: '37.jpg', width: '206', height: '206' },
      { name: '38.jpg', width: '206', height: '206' },
      { name: '39.jpg', width: '206', height: '206' },
      { name: '4.jpg', width: '116', height: '122' },
      { name: '40.jpg', width: '206', height: '206' },
      { name: '41.jpg', width: '110', height: '205' },
      { name: '42.jpg', width: '113', height: '201' },
      { name: '43.jpg', width: '121', height: '204' },
      { name: '44.jpg', width: '101', height: '202' },
      { name: '45.jpg', width: '144', height: '205' },
      { name: '46.jpg', width: '250', height: '321' },
      { name: '49.jpg', width: '289', height: '509' },
      { name: '5.jpg', width: '108', height: '118' },
      { name: '50.JPG', width: '2448', height: '2448' },
      { name: '51.jpg', width: '1280', height: '720' },
      { name: '52.jpg', width: '250', height: '140' },
      { name: '6.jpg', width: '79', height: '118' },
      { name: '7.jpg', width: '111', height: '140' },
      { name: '85.jpg', width: '356', height: '397' },
      { name: '86.jpg', width: '384', height: '431' },
      { name: '9.jpg', width: '81', height: '123' }
    ]
  }
]
const set = sets[1]

const SetsPage = () => {
  return (
    <div className='bx--grid bx--grid--full-width sets-page'>
      <div className='bx--row setspage__row-title' >
        <h2 className='sets-page__title'><strong>Ver imágenes / {set.name}</strong></h2>
      </div>
      <Set {...set} />
    </div>
  )
}

export default SetsPage;
