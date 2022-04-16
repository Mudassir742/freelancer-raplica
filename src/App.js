import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import JobSearch from "./components/JobSearch/JobSearch";

import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner/>
      <JobSearch/>
    </div>
  );
}

export default App;
