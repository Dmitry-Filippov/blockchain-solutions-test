import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import React from "react";
import Loader from "../Loader/Loader";

function App() {
  const [isLoaderActive, setLoaderActive] = React.useState(false);

  return (
    <div className="app">
      <Loader isLoaderActive={isLoaderActive} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Main setLoaderActive={setLoaderActive} />}
        />
        <Route
          path="/profile"
          element={<Profile setLoaderActive={setLoaderActive} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
