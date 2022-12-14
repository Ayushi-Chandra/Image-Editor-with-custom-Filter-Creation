import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import ImageEditor from './components/ImageEditor';
import Authorisor from "./components/Auth"




function App() {
  return (
    <div >
      <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Home></Home>} path="homepage" />
        <Route element={<Login></Login>} path="loginpage" />
        
        <Route
          element={
            <Authorisor>
              <ImageEditor />
            </Authorisor>
          }
          path="/imageditor"
        />
        <Route element={<Register></Register>}path="registerpage"/>
        <Route element={<ImageEditor></ImageEditor>}path="imageeditor"/>
        <Route element={<ImageEditor>PAGE NOT found</ImageEditor>}path="*"/>
      
      </Routes>
      </BrowserRouter>
        </div>
    );
  }

export default App;
