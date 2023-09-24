import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Productss } from './product details';
import { Products } from './Products';
import { Getsingle } from './getsingle';
import { Getdata } from './getData';
import { Login } from './Login form';
import { Loginpage } from './loginpage';
import { Dashboard } from './dashboard';
import { Loginform } from './form login';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Login/>}></Route>
       <Route path='/loginpage' element={<Loginpage/>}></Route>
       <Route path='/dashboard/:id' element={<Dashboard/>}></Route> 
       <Route path='/formlogin/:id' element={<Loginform/>}></Route> 
      {/* <Route path='/getsingle/:empno' element={[<Getsingle/>]}></Route> */}
       {/* <Route path='/' element={<Products/>}/> */}
       {/* <Route path='/productsdetails/:id' element={<Productss/>}/> */}
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
