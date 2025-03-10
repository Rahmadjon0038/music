import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS uslublarini import qilish
import Home from '../pages/Home/Home'

function Root() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // 1000ms (1s) davom etadigan animatsiya
  }, []);
  return (
    <div>
      <Home/>
    </div>
  )
}

export default Root
// const file = e.target.files[0]
//     setImage(URL.createObjectURL(file))