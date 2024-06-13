import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from'./pages/Home';
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/sobre" element={<About/>}></Route>
        <Route path="/contatos" element={<Contacts/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes