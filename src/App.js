import './App.css';
import Home from "./Home";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScheduleInterview from "./ScheduleInterview";
import InterviewDetails from "./InterviewDetails";
import RescheduleInterview from "./RescheduleInterview";
export default function App() {
  return (<Router>
    {/* <div className="App"> */}
    <NavBar />
    {/* <div className="content"> */}
    <Routes>
      < Route path="/" element={<Home />} />
      <Route path="/schedule" element={<ScheduleInterview />} />
      <Route path="/interview/:uuid" element={<InterviewDetails />} />
      <Route path="/reschedule/:uuid" element={<RescheduleInterview />} />
    </Routes>
    {/* </div> */}
    {/* </div> */}
  </Router>);
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
