
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetEmployee from './Components/GetEmployee';
import PostEmployee from './Components/PostEmployee';
import Navbar from './Components/Navbar';
import Editproducts from './Components/EditProducts';
import GetApi from './ContextApi/GetApi';


function App() {
  return (
    <GetApi>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={ <GetEmployee />}></Route>
            <Route path='/Post' element={<PostEmployee />}></Route>
            <Route path='/Post/:id' element={<Editproducts />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      </GetApi>
  );
}

export default App;
