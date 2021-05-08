import { Component } from "react";
import Loading from "../components/components/Loading";
import Card from "../components/components/Card";
import axios from "axios";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "3ed1ea04e5fcf9a3cb8aa83ee1abba79",
      loading: true,
      data: "",
      404: "false",
    };
  }

  componentDidMount = async () => {
    const url = `/data/2.5/weather?q=${this.props.city}&appid=${this.state.key}`;
    const res = await axios.get(url);
    console.log(url);
    if (res) this.setState({ data: res.data, loading: false });
  };

  render = () => {
    return (
      <div className="Weather">
        {this.state.loading ? (
          <Loading></Loading>
        ) : (
          <Card
            country={this.state.data.sys.country}
            location={this.state.data.name}
            desc={this.state.data.weather[0].description}
            icon={this.state.data.weather[0].icon}
            temp={this.state.data.main.temp}
            humidity={this.state.data.main.humidity}
            p={this.state.data.main.pressure}
            speed={this.state.data.wind.speed}
          ></Card>
        )}
      </div>
    );
  };
}
