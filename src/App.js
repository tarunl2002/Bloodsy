import './App.css';
import Hero from './components/Hero/Hero';
import Whyus from './components/Secondary/Whyus';
import Footer from './components/Secondary/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import BloodsList from "./components/bloods-list.component";
import EditBloods from "./components/edit-bloods.component";
import CreateBloods from "./components/create-bloods.component.js";
import CreateDoner from "./components/create-doner.component";

function App() {
  return (
    <div className="App">
      <Router>
          <Hero/>
          <Routes>
            <Route exact path='/view' element={<BloodsList/>}/>
            <Route path="/edit/:id" exact component={<EditBloods/>}/>
            <Route path="/create" component={<CreateBloods/>}/>
            <Route path="/doner" exact component={<CreateDoner/>}/>
          </Routes>
      </Router>
          <Whyus/>
          <Footer/>      

    </div>
  );
}

export default App;
