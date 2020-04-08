import React from 'react';

const Set = (props) => {
  return (
    <>
      <div className='bx--row set__row-title'>
        <h2 className='set__title'><strong>Set / {props.name}</strong></h2>
      </div>
      <div className='bx--row set__row-asd'>
      </div>
      <div className='bx--row set__row-images '>
        {props.images.map(image => {
          return (
            <SetImage {...image} setname={props.name} />
          )
        })}
      </div>
    </>
  )
}

const SetImage = (props) => {
  return (
    <>
      <div className='bx--col-md-2 set__img-container'>
        <div className='set__img-info'>
          <p><strong>{`${props.setname} ${props.id}`}</strong></p>
          <p><small>{`Tamaño: ${props.width}x${props.height}px`}</small></p>
        </div>
        <img
          className='set__img'
          src={props.download_url}
          alt='Carbon illustration'
        />
      </div>
    </>
  )
}

export default Set;
