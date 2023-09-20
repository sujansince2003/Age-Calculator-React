import { useState } from "react";

function App() {
  const date = new Date();
  let agedate;
  console.log(date.getDate());

  const [flag, setFlag] = useState(0);
  const [years, setYears] = useState(0);
  const [days, setDays] = useState(0);
  const [months, setMonths] = useState(0);
  const [age, setAge] = useState({});
  function setdata() {
    setFlag(1);
    if (
      (months && days && years && isNaN(months)) ||
      isNaN(days) ||
      isNaN(years) ||
      months < 1 ||
      months > 12 ||
      days < 1 ||
      days > 30
    )
      setDays((days) => parseInt(days));
    setMonths((months) => parseInt(months));
    setYears((years) => parseInt(years));
    agedate = new Date("years,months,date");
    setAge({
      year: date.getFullYear() - agedate.getFullYear(),
    });
  }

  return (
    <>
      {console.log(typeof age.year)}
      <div className="container">
        <div className="calbox">
          <div className="inputbox">
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
            <div className="inputbox2">
              Month
              <input type="text" onChange={(e) => setMonths(e.target.value)} />
            </div>
            <div className="inputbox2">
              Year
              <input type="text" onChange={(e) => setYears(e.target.value)} />
            </div>
          </div>
          <div className="btn">
            <button onClick={setdata}>Calculate</button>
            <div>ff</div>
          </div>
          <div className="results">
            <span>
              <span className="valuee">{flag == 1 ? age.year : " "}</span> Years
            </span>
            <span>
              <span className="valuee">{flag == 1 ? months : " "}</span> Months
            </span>
            <span>
              <span className="valuee">{flag == 1 ? days : " "}</span> Days
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
