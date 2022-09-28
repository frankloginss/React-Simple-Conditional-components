import './App.css';

function App() {

  const time = new Date();
  const day = time.toLocaleString("en-us", {weekday: "long"})
  const morning = time.getHours() >= 13 && time.getHours() <= 19;
  let dayMessage;

  if (day.toLowerCase() === "monday") {
    dayMessage = `Happy ${day}`
  } else if (day.toLowerCase() === "tuesday") {
    dayMessage = `${day}, four days to go`;
  } else if (day.toLowerCase() === "wednesday") {
    dayMessage = `${day}, half way there`;
  } else if (day.toLowerCase() === "thursday") {
    dayMessage = `${day}, start planning the weekend`;
  }else if (day.toLowerCase() === "friday") {
    dayMessage = `Woo - hoo, the weekedn is coming!`;
  } else {
    dayMessage = "Stay calm and keep having fun";
  }


  return (
    <div className="App">
      <h2>Conditional-components</h2>
      <h1>{dayMessage}</h1>
      {morning ? <h2>Have you had launch yet?</h2> : ""}
    </div>
  );
}

export default App;
