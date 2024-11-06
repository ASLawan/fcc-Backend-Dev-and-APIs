import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const baseUrl = "http://localhost:5000/api/timestamp";
  const [inputDate, setInputDate] = useState("");
  const [timeStamp, setTimeStamp] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${baseUrl}/${inputDate}`);
      setTimeStamp(response.data);
      setError(null);
    } catch (error) {
      setError("Invalid Date");
      setTimeStamp(null);
    }
  };

  return (
    <>
      <div className="timestamp">
        <h1>TimeStamp Microservice</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            value={inputDate}
            onChange={(e) => {
              setInputDate(e.target.value);
            }}
            placeholder="Enter a date or timestamp...."
          />
          <button type="submit">Get TimeStamp</button>
        </form>
        {timeStamp && (
          <div className="output">
            <div id="unix">
              <p>Unix: {timeStamp.unix}</p>
            </div>
            <div id="utc">
              <p>UTC: {timeStamp.utc}</p>
            </div>
          </div>
        )}
        {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}
      </div>

      <div className="author">By Austin S. Lawan</div>
    </>
  );
}

export default App;
