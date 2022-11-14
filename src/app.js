import React from "react";
import Movies from "./components/movies";

class App extends React.Component {
  render() {
    return (
      <>
        <main className="container">
          <Movies></Movies>
        </main>
      </>
    );
  }
}

export default App;
