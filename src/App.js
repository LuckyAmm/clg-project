// import Gallery from "./components/Gallery";
// import About from "./components/About";
// import Header from "./components/Header";
// import Table from "./components/Table";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Staff from "./components/Staff";
// import Admissions from "./components/Admissions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Aicef from "./components/Aicef";

// import { HiMenuAlt3 } from "react-icons/hi";
// import { MdOutlineDashboard } from "react-icons/md";
// import { RiSettings4Line } from "react-icons/ri";
// import { TbReportAnalytics } from "react-icons/tb";
// import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
// import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import Admin from "./components/Admin";
import Waste from "./components/Waste";
function App() {

 
  return (
    <>
      <Router>
        <Waste/>
        <Routes>
          <Route exact path="/waste" element={<Admin />} />
          {/* <Route exact index element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/admissions" element={<Admissions />} />
          <Route exact path="/counselling" element={<Table />} />
          <Route exact path="/AICEF" element={<Aicef />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/departments" element={<Staff />} /> */}
          {/* <Route path="*" component={<NoPage />} /> */}
        </Routes>
      </Router>
    </>

    // <div className="bg-[#0e0e0e] w-16 min-h-screen  text-white p-5 space-y-10">
    //   <div className="top mx-auto  ">
    //     <Bars3Icon
    //       width={24}
    //       className="cursor-pointer mx-auto"
    //       onClick={handleClose}
    //     />
    //   </div>
    //   <div className="space-y-1">
    //     <div className="flex items-center gap-5 hover:bg-gray-100/20 rounded p-1 select-none cursor-pointer">
    //       <div>
    //         <SwatchIcon width={32} />
    //       </div>
    //       <div className="hidden">Dashboard</div>
    //     </div>
    //     <div className="flex items-center gap-5 hover:bg-gray-100/20 rounded p-1 select-none cursor-pointer">
    //       <div>
    //         <SwatchIcon width={32} />
    //       </div>
    //       <div className="hidden">Dashboard</div>
    //     </div>
    //     <div className="flex items-center gap-5 hover:bg-gray-100/20 rounded p-1 select-none cursor-pointer">
    //       <div>
    //         <SwatchIcon width={32} />
    //       </div>
    //       <div className="hidden">Dashboard</div>
    //     </div>
    //   </div>
    //   <div className="">
    //     <button className="bg-indigo-700 px-2 py-1 rounded hover:bg-indigo-600 hidden">
    //       LogOut
    //     </button>
    //   </div>
    // </div>
  );
}

export default App;
