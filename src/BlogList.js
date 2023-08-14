import React from 'react'

const BlogList = ({data,className}) => {
    console.log(data)
  return (
    <div>
      {data.map(item=>{
        return(
            <div className={className}>
                {Object.entries(item).map((header)=>{
                    // return(
                    //     <p>{header}</p>
                    // )

                    switch(header[0]){
                        case 'title':
                            return(
                                <h1>{header[1]}</h1>
                            )
                        case 'author':
                            return(
                                <p>{header[1]}</p>
                            )
                        default:
                            return(
                                <p>No Data</p>
                            )
                    }
                })}
                </div>
        )
      })}
    </div>
  )
}

export default BlogList
