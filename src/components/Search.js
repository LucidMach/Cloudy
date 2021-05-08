import { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = {
    city: "",
    advanced: false,
    format: "C",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.getCity(this.state.city);
  };

  render = () => {
    return (
      <form className="Search" onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="city"
          value={this.state.city}
          placeholder="Search City"
          autoComplete="off"
          onChange={(e) => this.setState({ city: e.target.value })}
        />
        <button className="btn">Check Weather</button>
      </form>
    );
  };
}

export default Search;
