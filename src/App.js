import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import JobSearch from "./components/JobSearch/JobSearch";
import Footer from "./components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <JobSearch />
      <Footer />
    </div>
  );
}

export default App;
