import React,{useState} from 'react'
import Blog from './Blog'
const Home = () => {
    const[blogs,setBlogs]=useState([
        {title:'Title1',author:'Sherlock',id:1},
        {title:'Title2',author:'Watson',id:2},
        {title:'Title3',author:'Olivia',id:3},
        {title:'Title4',author:'Ava',id:4},
    ]);
    const deleteBlog = (author) =>{
        const newBlogs  = blogs.filter(blog => blog.author !== author)
        setBlogs(newBlogs)
    }
  return (
    <div>
      <Blog blogs={blogs} title={'All My Blogs'} deleteBlog={deleteBlog}/>
    </div>
  )
}

export default Home
