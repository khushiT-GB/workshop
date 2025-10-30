import { useState } from "react";
import "./App.css";
import QuantumSummitLanding from "./component/QuantumSummitLanding";
import Highlights from "./component/Highlights";
import EventSchedule from "./component/EventSchedule";
import OurSpeakers from "./component/Speakers";
import AboutUs from "./component/AboutUs";
import Footer from "./component/Footer";
import PhotoGallery from "./component/Gallery";
import AffiliationsCarousel from "./component/Affiliations";
import Organizser from "./component/Organiser";
import StudentVolunteer from "./component/StudentVolunteers";
import Organizers from "./component/Organiser";
import StudentVolunteers from "./component/StudentVolunteers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <QuantumSummitLanding />
      <AffiliationsCarousel />
      <Highlights />
      <EventSchedule />
      <Organizers />
      <OurSpeakers />
      <PhotoGallery />
      <StudentVolunteers />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
