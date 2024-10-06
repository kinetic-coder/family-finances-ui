import React from "react";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import Footer from "./components/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./views/Home";
import Header from "./components/Header";
import "./style/global.css";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <div id="app" className="d-flex flex-column h-100">
        <Header />
        <Container className="flex-grow-1 mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
