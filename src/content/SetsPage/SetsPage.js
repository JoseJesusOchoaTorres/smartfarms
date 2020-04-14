import React from 'react';
import { Set } from '../../components/Set';

const sets = [
  {
    name: 'Random',
    images: [
      {
        'id':'1',
        'author':'Alejandro Escamilla',
        'width':5616,
        'height':3744,
        'url':'https://unsplash.com/photos/LNRyGwIJr5c',
        'download_url':'https://picsum.photos/id/1/5616/3744'
      },
      {'id':'10',
        'author':'Paul Jarvis',
        'width':2500,
        'height':1667,
        'url':'https://unsplash.com/photos/6J--NXulQCs',
        'download_url':'https://picsum.photos/id/10/2500/1667'
      },
      {'id':'100',
        'author':'Tina Rataj',
        'width':2500,
        'height':1656,
        'url':'https://unsplash.com/photos/pwaaqfoMibI',
        'download_url':'https://picsum.photos/id/100/2500/1656'
      },
      {'id':'1000',
        'author':'Lukas Budimaier',
        'width':5626,
        'height':3635,
        'url':'https://unsplash.com/photos/6cY-FvMlmkQ',
        'download_url':'https://picsum.photos/id/1000/5626/3635'
      },
      {'id':'1001',
        'author':'Danielle MacInnes',
        'width':5616,
        'height':3744,
        'url':'https://unsplash.com/photos/1DkWWN1dr-s',
        'download_url':'https://picsum.photos/id/1001/5616/3744'
      },
      {'id':'1002',
        'author':'NASA',
        'width':4312,
        'height':2868,
        'url':'https://unsplash.com/photos/6-jTZysYY_U',
        'download_url':'https://picsum.photos/id/1002/4312/2868'
      },
    ]
  }
]
const set = sets[0]

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
