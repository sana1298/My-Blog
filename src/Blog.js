import React from 'react'

const Blog = ({blogs,title,deleteBlog}) => {
  return (
    <div>
        <h1>{title}</h1>
        {blogs.map((item)=>{
            return(
                <div>
                    <h2>{item.title}</h2>
                    <p>{'Author is'+item.author}</p>
                    <button onClick={()=>deleteBlog(item.author)}>Delete</button>
                </div>
            )
        })}
      
    </div>
  )
}

export default Blog
