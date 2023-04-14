import React from 'react'

const Card = ({ image, title, description }) => {
  return (
    <div className='glass max-w-sm mx-auto bg-transparent rounded-md overflow-hidden shadow-md'>
      <img src={image} alt={title} className='w-full h-56 object-cover' />
      <div className='px-4 py-2'>
        <h2 className='text-xl font-bold mb-2'>{title}</h2>
        <p className='text-gray-700 text-base'>{description}</p>
      </div>
    </div>
  )
}

export default Card
