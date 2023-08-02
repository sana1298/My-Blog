import React from 'react'

const ContentPage = () => {
  const data=[{
    title:'Blog Post 1' ,
    author: 'Sana'
   },
   {title:'Blog Post 2' ,
   author: 'Romeo'
  }]
  return (
    <div className='content'>
      {data.map(item =>{
        return(
      <div className='data'>
        <h1 className='party'>{item.title}</h1>
        <p className='welcome'>{item.author}</p>
        </div>
        )
      })}
     
    </div>
  )
    }

export default ContentPage
