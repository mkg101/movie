import React from "react";

class Table extends React.Component {
  state = {
    num: 7,
  };

  setNum = () => {
    this.setState({
      num: parseInt(document.getElementById(this.props.id).value),
    });
  };

  arr = () => {
    return [...Array(this.props.upto)].map((_, index) => index + 1);
  };

  render() {
    return (
      <>
        <input
          id={this.props.id}
          value={this.state.num}
          onChange={this.setNum}
          type="number"
        ></input>
        {this.arr().map((n) => (
          <div key="n">
            {this.state.num} * {n} = {this.state.num * n}
          </div>
        ))}
      </>
    );
  }
}

export default Table;
