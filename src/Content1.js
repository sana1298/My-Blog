import React, { useState } from 'react'
import BlogList from './BlogList';

const ContentPage = (props) => {
  const {data ,age} = props;
  // const data=[{
  //   title:'Blog Post 1' ,
  //   author: 'Sana'
  //  },
  //  {title:'Blog Post 2' ,
  //  author: 'Romeo'
  // }]
  // const name='Sanofer';
  const [name,setName]= useState("Sanofer")
  // const age=25;
  const handleClick = () => {
    console.log('Button Clicked');
    setName("sana")
  }
  // const data2=data.filter(data => data.author === 'Sana');
  // const data3=data.filter(data => data.author === 'Romeo');
  return (
    <div className='content'>
      {/* {data.map(item =>{
        return(
      <div className='data'>
        <h1 className='party'>{item.title}</h1>
        <p className='welcome'>{item.author}</p>
        </div>
        )
      })} */}
      <BlogList data={data}/>
      {/* <BlogList className='red' data={data2}/> */}
      {/* <BlogList className='blue' data={data3}/> */}
      <h2>Homepage</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
    }

export default ContentPage
