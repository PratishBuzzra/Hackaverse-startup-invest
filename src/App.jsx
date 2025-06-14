import React from 'react'

function App() {
  return (
    <div className="App">
    <Navbar /> 
    <BrowserRouter>   
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
    </div>
    );
}

export default App;
