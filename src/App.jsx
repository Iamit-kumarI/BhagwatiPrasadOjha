import { useState } from "react";
import Program from "./components/programs/Programs";
import CallenderJS from "./components/calender/Facilities";
import Hero from "./components/home/Home";
import EnquiryPopup from "./components/enquiry/Enquiry";
import FacultySection from "./components/faculty/FacultySection";
import WhyUs from "./components/whyUs/WhyUs";
import Footer from "./components/footer/Footer";
import ChatWidget from "./components/chat/Chat";
import Navbar from "./components/navBar/NavBar";

function App() {
  const [showEnquiry, setShowEnquiry] = useState(true); // 👈 control popup

  return (
    <>
      <Navbar/>
      {/* POPUP */}
      {showEnquiry && (
        <EnquiryPopup onClose={() => setShowEnquiry(false)} />
      )}

      {/* PAGE */}
      <Hero />
      <WhyUs/>
      <FacultySection/>
      <Program />
      <CallenderJS />
      <Footer/>
      <ChatWidget/>
      {/* <SchoolWebsite/> */}
    </>
  );
}

export default App;