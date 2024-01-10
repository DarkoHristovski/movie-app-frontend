import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import AddMovieModal from "./components/AddMovieModal";
import { useState, useEffect } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log("Changed", isModalOpen);
  }, [isModalOpen]);

  return (
    <>
      <Header setIsModalOpen={setIsModalOpen} />
      <Main />
      <Footer />
      <AddMovieModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}

export default App;
