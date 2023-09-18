import { useState } from "react";

function App() {
  const [years, setYears] = useState(0);
  const [days, setDays] = useState(0);
  const [months, setMonths] = useState(0);
  return (
    <>
      <div className="container">
        <div className="calbox">
          <div className="inputbox">
            <div className="inputbox2">
              day
              <input type="text" />
            </div>
            <div className="inputbox2">
              Month
              <input type="text" />
            </div>
            <div className="inputbox2">
              Year
              <input type="text" />
            </div>
          </div>
          <div className="results">
            <span>
              <span className="valuee">{years}</span> Years
            </span>
            <span>
              <span className="valuee">{months}</span> Years
            </span>
            <span>
              <span className="valuee">{days}</span> Years
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
