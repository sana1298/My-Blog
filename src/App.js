// import logo from './logo.svg';
import './App.css';
import Navbar from'./Navbar';
import ContentPage from './Content1';
// import FetchAPI from './Fetch'

function App() {
  const data2=[{
      title:'Blog Post 1' ,
      author: 'Sana'
     },
     {title:'Blog Post 2' ,
     author: 'Romeo'
    },
    {title:'Blog Post 3' ,
    author: 'Alya'
   }]
    const age=28;
  return (
    <div className="App">
        <Navbar/>
        <ContentPage data={data2} age={age}/>
        {/* <FetchAPI/> */}
        
    </div>
  );
}

// function MyButton() {
//   return (
//     <button>I'm a button</button>
//   );
//   }

//   function MyHead(){
//     return(
//       <div>
//       <h1>Welcome To React</h1>
//       <MyButton/>
//     </div>
//     )
    
  // }

export default App;
