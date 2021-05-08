import "./App.css";
import { Component } from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
    };
  }

  getCity = (city) => {
    console.log(city);
    this.setState({ city: city });
  };

  render = () => {
    return (
      <div className="App">
        {this.state.city ? (
          <Weather city={this.state.city} />
        ) : (
          <Search getCity={this.getCity} />
        )}
      </div>
    );
  };
}

export default App;
