import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Browse/Footer";

export default function MainLayout() {
  
  return (
    <main>
      
      <NavBar />
      <div>
        <Outlet />
      </div>
     
      <Footer />
    </main>
  );
}
