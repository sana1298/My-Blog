// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';


// import Navbar from'./Navbar';
// import ContentPage from './Content1';
// import Incdec from './Incdec';
// import FetchAPI from './Fetch'

import Objhome from './Objhome';
import NavBar1 from './NavBar1';
import Menu from './Menu';
import Service from './Service';
// import Home from './Home';
// import About from './About';
// import NoMatch from './NoMatch';
// import Nav from './Nav'

// import Weather from './Weather';

function App() {
  // const [isActive, setIsActive] = useState(false)
  // const data2=[{
  //     title:'Blog Post 1' ,
  //     author: 'Sana'
  //    },
  //    {title:'Blog Post 2' ,
  //    author: 'Romeo'
  //   },
  //   {title:'Blog Post 3' ,
  //   author: 'Alya'
  //  }]
  //   const age=28;
   return (
    <div className="App">
        {/* <Weather /> */}
         {/* <Navbar/> */}
         {/* <ContentPage data={data2} age={age}/> */}
         {/* <Incdec /> */}
        {/* <FetchAPI/> */}
        {/* <button onClick={() => {
      setIsActive(!isActive);
    }}>Toggle</button>
    {isActive && <Content data={data2} age={age}/>} */}
    <Router>
    {/* <nav style={{ margin: 10 }}>
          <Link to="/home" style={{ padding: 5 }}>
          Home
          </Link>
          <Link to="/about" style={{ padding: 5 }}>
          About
          </Link>
          <Link to="/No" style={{ padding: 5 }}>
          NoMatch
          </Link>
      </nav> */}
    {/* <Nav /> */}
    <NavBar1 />
       <Routes>
        {/* <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} /> */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/service" element={<Service />} />
        <Route path="/objhome" element={<Objhome />} />
      </Routes> 
    </Router>
    {/* <Objhome /> */}

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

// function Home() {
//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Home View</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;