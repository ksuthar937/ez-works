import { useState } from "react";
import axios from "axios";

import Logo from "./assets/EZWorksBlue.png";
import Card from "./components/card/Card";

import { DATA } from "./data.js";

const API_URL = "http://34.225.132.160:8002/api";

function App() {
  const [userEmail, setUserEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState("");

  /** API Request */
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(API_URL, {
        email: userEmail,
      });
      if (res.status === 200) {
        setIsSubmitted(true);
        setUserEmail("");
        setIsError("");
      }
    } catch (error) {
      setIsSubmitted(false);
      setIsError(error.message);
    }
  };

  return (
    <main className="container">
      <header className="info">
        <img src={Logo} alt="company logo" width={220} />
        <h1>A Suite of Business Support Services</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed
        </p>
      </header>
      <section className="cards">
        {DATA.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            image={item.image}
            desc={item.description}
          />
        ))}
      </section>
      <section className="formdata">
        <form onSubmit={handleFormSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <button>Contact Me</button>
        </form>
        {isSubmitted && (
          <p className="success-msg">Form Submitted Successfully!</p>
        )}
        {isError.length > 0 && <p className="error-msg">{isError}</p>}
      </section>
    </main>
  );
}

export default App;
