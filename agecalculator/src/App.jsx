import { useState } from "react";

function App() {
  const date = new Date();

  const [flag, setFlag] = useState(0);
  const [years, setYears] = useState("");
  const [days, setDays] = useState("");
  const [months, setMonths] = useState("");
  const [age, setAge] = useState({ year: 0 });

  function setdata() {
    if (
      !isNaN(days) &&
      !isNaN(months) &&
      !isNaN(years) &&
      months >= 1 &&
      months <= 12 &&
      days >= 1 &&
      days <= 31
    ) {
      setFlag(1);
      setDays((days) => parseInt(days));
      setMonths((months) => parseInt(months));
      setYears((years) => parseInt(years));
      const agedate = new Date(`${years}-${months}-${days}`);
      setAge({
        year: date.getFullYear() - agedate.getFullYear(),
        month: date.getMonth() - agedate.getMonth(),
        day: date.getDate() - agedate.getDate(),
      });
    } else {
      setFlag(2);
    }
  }
  function reset() {
    setFlag(0);
    setMonths("");
    setDays("");
    setYears("");
    setAge({});
  }

  return (
    <>
      <div className="container">
        <div className="calbox">
          <div className="inputbox">
            <div className="inputbox2 ">
              Year
              <input
                className="year"
                type="text"
                value={years}
                onChange={(e) => setYears(e.target.value)}
              />
            </div>

            <div className="inputbox2">
              Month
              <input
                type="text"
                value={months}
                onChange={(e) => setMonths(e.target.value)}
              />
            </div>
            <div className="inputbox2">
              day
              <input
                type="text"
                value={days}
                onChange={(e) => {
                  setDays(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="btn">
            {flag === 0 && <button onClick={setdata}>Calculate</button>}
          </div>
          {flag === 1 ? (
            <div className="results">
              <span>
                <span className="valuee">{age.year}</span> Years
              </span>
              <span>
                <span className="valuee">{age.month}</span> Months
              </span>
              <span>
                <span className="valuee">{age.day}</span> Days
              </span>
              <div className="btn">
                <button onClick={reset}>Reset</button>
              </div>
            </div>
          ) : flag != 2 ? (
            <>
              <div className="message">ENTER THE DATE</div>
            </>
          ) : (
            <>
              <div className="message">PROVIDED DATA IS NOT ACCEPTED</div>
              <div className="btn">
                <button onClick={reset}>Try Again</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
