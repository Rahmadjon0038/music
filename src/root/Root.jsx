import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS uslublarini import qilish
import Home from '../pages/Home/Home'
import { Navigate, Route, Routes } from "react-router-dom";
import Addmusic from "../components/addmusic/Addmusic";

function Root() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // 1000ms (1s) davom etadigan animatsiya
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={'/home'}/>} />
        <Route path="/addmusic" element={<Addmusic/>}/>
        <Route path="/statis" element={<h1>statistika</h1>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default Root
// const file = e.target.files[0]
//     setImage(URL.createObjectURL(file))