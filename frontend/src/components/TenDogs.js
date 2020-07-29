import React, { Component } from "react";
import actions from "../services/index";

class TenDogs extends Component {
  state = {
    dogs: [],
  };

  async componentDidMount() {
    let res = await actions.getDogs();
    console.log("hello", res);
    this.setState({
      dogs: res.data.dogs,
    });
  }

  displayDogs = () => {
    return this.state.dogs.map((eachDog) => {
      return (
        <li>
          <img src={eachDog.image} alt="dogpic" />
          <br />
          {/* <img src={eachDog.image} alt="dogpic" /> */}
          {eachDog.name}
          {`#${eachDog.shelterID}`}

          <br />
          {`Age: ${eachDog.age}`}
          <br />
          {`Weight: ${eachDog.weight}`}
          <br />
          {eachDog.description}
        </li>
      );
    });
  };

  render() {
    return <div>{this.displayDogs()}</div>;
  }
}

export default TenDogs;
