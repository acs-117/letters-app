import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Letters from '../src/pages/letters';
import Write from '../src/pages/write'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element = {<Letters/>} />
        <Route path= "/write" element = {<Write/>} />
      </Routes>
    </BrowserRouter>

  )
}   

export default App;