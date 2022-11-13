import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="https://www.google.com/">
              Navbar{" "}
              <span className="badge badge-pill badge-secondary">
                {this.props.totalCounters}
              </span>
            </a>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
