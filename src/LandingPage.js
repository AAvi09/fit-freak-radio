import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LandingPage.css";
import image1 from "./Images/image1.jpg";
import image2 from "./Images/image2.jpg";
import image3 from "./Images/image3.jpg";
import image4 from "./Images/image4.jpg";
import image5 from "./Images/image5.jpg";
import image6 from "./Images/image6.jpg";
import image7 from "./Images/image7.jpg";
import image8 from "./Images/image8.jpg";
import image9 from "./Images/image9.jpg";
import image10 from "./Images/image10.jpg";
import image11 from "./Images/image11.jpg";
import image12 from "./Images/image12.jpg";
import image13 from "./Images/image13.jpg";
import image14 from "./Images/image14.jpg";
import image15 from "./Images/image15.jpg";
import image16 from "./Images/image16.jpg";
import image17 from "./Images/image17.jpg";
import image18 from "./Images/image18.jpg";
import image19 from "./Images/image19.jpg";
import image20 from "./Images/image20.jpg";
// Import other images similarly

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
];

function LandingPage() {
  const [randomImage, setRandomImage] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setRandomImage(images[randomIndex]);
    }, 4000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    async function fetchQuote() {
      try {
        const res = await axios.get("https://type.fit/api/quotes");
        const quotes = res.data;
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote.text);
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    }

    fetchQuote();
  }, []);

  return (
    <div
      className="landing-page"
      style={{ backgroundImage: `url(${randomImage})` }}
    >
      <div className="overlay">
        <h1>💪🏾Fit-Freak-Radio📻</h1>
        <p>{quote}</p>
      </div>
    </div>
  );
}

export default LandingPage;
