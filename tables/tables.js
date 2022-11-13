import React from "react";
import Table from "./table";
class Tables extends React.Component {
  state = {
    upto: 10,
  };

  setUpto = () => {
    this.setState({
      upto: parseInt(document.getElementById("upto").value),
    });
  };
  render() {
    return (
      <>
        <input
          id="upto"
          value={this.state.upto}
          onChange={this.setUpto}
          type="number"
        ></input>
        <Table upto={this.state.upto} id="1"></Table>
        <Table upto={this.state.upto} id="2"></Table>
        <Table upto={this.state.upto} id="3"></Table>
        <Table upto={this.state.upto} id="4"></Table>
      </>
    );
  }
}
export default Tables;
