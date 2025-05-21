import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from "./pages/home/Home";
import Lounge from "./pages/lounge/Lounge";
import Login from "./pages/login/Login";
import LoungeList from "./pages/loungeList/LoungeList";
import BookingPage from "./pages/booking/BookingPage";
import MyBookings from "./pages/mybookings/MyBooking";
import Register from "./pages/registeration/Register.jsx";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/lounges" element={<LoungeList/>}/>
        <Route path="/lounges/:id" element={<Lounge />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/my-bookings" element={<MyBookings />}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
