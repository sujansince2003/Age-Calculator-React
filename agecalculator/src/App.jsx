function App() {
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
              <span className="valuee">5</span> Years
            </span>
            <span>
              <span className="valuee">5</span> Years
            </span>
            <span>
              <span className="valuee">5</span> Years
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
