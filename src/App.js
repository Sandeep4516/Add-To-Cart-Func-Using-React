import { Route, Routes } from "react-router-dom";
import HomePage from "./Home/HomePage";
import LoginPage from "./Login/LoginPage";
function App() {
  return (
    <div className="App">
    
     <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/Home" element={<HomePage/>}/>
     </Routes>
    </div>
  );
}

export default App;
