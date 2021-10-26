import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CoderYad from './coder yad';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return ( 
<BrowserRouter>

<CoderYad/>
<ToastContainer/>
</BrowserRouter>
     );
}
 
export default App;