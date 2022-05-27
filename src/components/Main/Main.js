import Converter from "../Converter/Converter";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Main.css";

const Main = ({ setLoaderActive }) => {
  return (
    <div className="wrapper">
      <div>
        <Header />
        <main className="main">
          <Converter setLoaderActive={setLoaderActive} />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
