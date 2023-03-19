import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Header from "./components/Header";
import Table from "./components/Table";
import Home from "./components/Home";
import Login from "./components/Login";
import Staff from "./components/Staff";
import Admissions from "./components/Admissions";
import Aicef from "./components/Aicef";
import { useState } from "react";

import Admin from "./components/AdminComp/Waste";
import Side from "./components/AdminComp/Admin";
import EditLanding from "./components/AdminComp/EditLanding";
function App() {
  const [openAdmin, setOpenAdmin] = useState(true)
  const changetoAdmin = () => {
    setOpenAdmin(true);
  }
  const changetoUser = () => {
    setOpenAdmin(false);
  }
  return (
    <>
      {!(openAdmin) &&<Router>
        <Header/> 
        <Routes>
          <Route exact index element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login changetoAdmin={changetoAdmin} />} />
          <Route exact path="/admissions" element={<Admissions />} />
          <Route exact path="/table" element={<Table />} />
          <Route exact path="/AICEF" element={<Aicef />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/departments" element={<Staff />} />
          {/* <Route path="*" component={<NoPage />} /> */}
        </Routes>
      </Router>}

      {openAdmin && <Router >
        <Admin changetoUser={changetoUser} />
        <Routes>
        <Route exact path="/admin" element={<Side />} />
        <Route exact path="/editLanding" element={<EditLanding />} />
        </Routes>
      </Router>}
    </>
  );
}

export default App;
