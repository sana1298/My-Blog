import React,{useState , useEffect} from 'react'

const Incdec = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        alert(count);
         return()=>{
            console.log("no count")
         }
        
    })
 
  return (
    <div>
       <input value={count} onChange={e => setCount(e.target.value)}/>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default Incdec