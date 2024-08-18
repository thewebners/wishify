import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './Routes/Site';
import Header from './Components/Main/Header';
import { useEffect, useState } from 'react';
import HeaderContext from './Contexts/HeaderContext';

function App() {
  const [ui, setui] = useState('Header');

  useEffect(()=>
  {
    var uiData = sessionStorage.getItem("uitype");

    if(uiData!=null)
    {
      setui(uiData);
      sessionStorage.removeItem("uitype");
    }
  }, [])
  return (
    <>
      <BrowserRouter>
        {
          ui==='Header'?
          <>
            <Header/>
          </>:null
        }
          <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
