import axios from "axios";
import HomePage from "./screens/HomePage";
import MapSection from "./components/MapSection";
import "./app.css";
import { useEffect, useState } from "react";

export default function App() {
  const [ipAddressInput, setIPAddressInput] = useState("");
  const [locationData, setLocationData] = useState({
    ipAddress: "",
    location: "",
    timezone: "",
    isp: "",
  });
  const [gridPosition, setGridPosition] = useState();

  useEffect(() => {
    fetch("https://api.ipify.org/")
      .then((r) => r.text())
      .then((r) => setIPAddressInput(r))
      .then(getIPLocation());
  }, []);

  const getIPLocation = async () => {
    const response = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        import.meta.env.VITE_APIKEY
      }&ipAddress=${ipAddressInput}`
    );
    const data = response.data;
    // console.log(response.data.location);
    setLocationData((prev) => ({
      ipAddress: data.ip,
      location: `${data.location.city}, ${data.location.region}, ${data.location.postalCode}`,
      timezone: data.location.timezone,
      isp: data.isp ? data.isp : "No isp",
    }));
    setGridPosition([data.location.lat, data.location.lng]);
  };

  function handleClick(event) {
    getIPLocation();
  }

  function handleIPInput(event) {
    setIPAddressInput(event.target.value);
  }

  return (
    <div className="home-page-container">
      <picture className="bg-picture">
        <source
          srcSet={"./images/pattern-bg-mobile.png"}
          media="(max-width:600px)"
        />
        <img src={"./images/pattern-bg-desktop.png"} />
      </picture>
      {gridPosition && <MapSection gridPosition={gridPosition} />}
      <main>
        <HomePage
          inputHandler={handleIPInput}
          ipAddress={ipAddressInput}
          handleGo={handleClick}
          locationInfo={locationData}
        />
      </main>
    </div>
  );
}
