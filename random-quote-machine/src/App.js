import React from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  const [quotes, setQuotes] = React.useState({});
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [index, setIndex] = React.useState(5);

  React.useEffect(
    () =>
      fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((data) => {
          setQuotes(data);
          setIsLoaded(true);
        }),
    []
  );

  function handleOnNext() {
    setIndex(Math.floor(Math.random() * quotes.length));
  }

  return isLoaded ? (
    <div id="quote-box">
      <Card onNext={handleOnNext} quote={quotes[index]} />
    </div>
  ) : (
    <div>
      <h1>Loading ...</h1>
    </div>
  );
};

export default App;
