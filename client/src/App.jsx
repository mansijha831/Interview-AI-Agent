import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import InterviewPage from "./pages/InterviewPage";
import { useEffect } from "react";
import axios from "axios";
// import { ServerUrl } from "../App";
import { useDispatch } from "react-redux";
import { setUserData } from "./redux/userSlice";

// export const ServerUrl = "http://localhost:3000";
 export const ServerUrl =  "https://interview-ai-agent-30jn.onrender.com"
import InterviewHistory from "./pages/interviewHistory";
import Pricing from "./pages/Pricing";
import InterviewReport from "./pages/InterviewReport";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get(
          ServerUrl + "/api/user/current-user",

          { withCredentials: true },
        );

        dispatch(setUserData(result.data));
        // console.log(result.data);
      } catch (error) {
        console.log(error);
        dispatch(setUserData(null));
      }
    };
    getUser();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/interview" element={<InterviewPage />} />
      <Route path="/history" element={<InterviewHistory />} />

      <Route path="/pricing" element={<Pricing />} />
      <Route path="/report" element={<InterviewReport />} />
      <Route path="/report/:id" element={<InterviewReport />} />
    </Routes>
  );
}
export default App;
