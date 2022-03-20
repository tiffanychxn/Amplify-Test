import { render } from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './pages/shop.js';
import SignUp from './pages/signup.js'
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const rootElement = document.getElementById("root");
render(
  
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="shop" element={<Shop />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>,
  
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
