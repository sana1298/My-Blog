// import logo from './logo.svg';
import './App.css';
import Navbar from'./Navbar';
import ContentPage from './Content';
import FetchAPI from './Fetch'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <ContentPage/>
        <FetchAPI/>
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
