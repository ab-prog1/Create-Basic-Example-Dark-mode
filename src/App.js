import { useEffect, useState } from "react";

function App() {

  const getMode = () => {
    const initialMode = localStorage.getItem("mode");
    if (initialMode == null) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return true
      } else {
        return false;
      }
    } else {
      return JSON.parse(localStorage.getItem("mode"));
    }
  }

  const [dark, setDark] = useState(getMode());
  
  useEffect(()=>{
    localStorage.setItem("mode", JSON.stringify(dark))
  }, [dark])

  return (
    <div className={dark ? "app dark-mode" : "app"}>
      <header className="header">
        <div className="container">
          <div className="nav">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us  </li>
            </ul>
            <label className="switch">
              <input 
               type="checkbox"
               onChange={()=> setDark(!dark)}
               checked={dark}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </header>
      <div className="content">
          <div className="container">
            <h1>{dark ? "Dark mode is activated and we have a dark space" : "Light mode is activated and the space is bright"}</h1>
            <p>This is light mode and now the screen is white</p>
          </div>
          <div className="container">
            <div className="card">
              <div className="card-item">
                <img src="image/1.jpg" alt="" />
                <h2>Top Angebot</h2>
                <p>Produkte von Philips</p>
              </div>
              <div className="card-item">
                <img src="image/2.jpg" alt="" />
                <h2>Top Angebot</h2>
                <p>Produkte von Philips</p>
              </div>
              <div className="card-item">
                <img src="image/3.jpg" alt="" />
                <h2>Top Angebot</h2>
                <p>Produkte von Philips</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
