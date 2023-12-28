// App.js
import React from 'react';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';


const App = () => {
  return (
    <>
    <Navbar logo="Portfolio" home="Home" />
    <TextForm heading="Enter the text..."/>
    
    </>
  );
};
export default App;



