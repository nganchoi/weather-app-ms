import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.loadWeather}>
        <input type="text" name="country" placeholder="country" />
        <input type="text" name="city" placeholder="city..." />
        <button>Get Weather</button>
      </form>
    );
  }
}

export default Form;
