import React from 'react'
// function FetchAPI(){
    const Fetch = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
   .then((response) =>response.json())
   .then((json) =>{console.log(json)
    } )
 
// }
return(
    <div>
        <h1>API</h1>
    </div>
)
}



export default Fetch
