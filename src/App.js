import "./App.css";
import Navbar from "./components/Navbar";
import TitleCover from "./components/TitleCover";
import NewArrivals from "./components/NewArrivals";
import PopulaArticles from "./components/PopularArticles";

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <TitleCover />
        <NewArrivals />
        <PopulaArticles />
        <footer>
          <div className="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="https://github.com/ayushkanyal">Ayush Kanyal</a>
            .
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
