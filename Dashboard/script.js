class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forest_name: "__________",
      content: "_____",
      temperature: 25,
      humidity: 60,
      duffPercentage: 80,
      showContent: true,
    };
  }

  toggleContent = () => {
    this.setState((prevState) => ({
      showContent: !prevState.showContent,
    }));
  };

  render() {
    return (
      <div className="container">
        {/* {this.state.showContent && ( */}
          <div className="content">
            <div className="name">FOREST NAME:{this.state.forest_name}</div>
            <div className="images">
              <img src="./icon/sun.png" />
              {/* <img src="./icon/heating.png" />
              <img src="./icon/sun.png" /> */}
            </div>
            <div className="status"><p>Fire Danger Status:{this.state.content}</p></div>
            <div className="card">
              <div className="label"><i className="fas fa-thermometer-half"></i> Temperature:</div>
              <div>{this.state.temperature} °C</div>
            </div>
            <div className="card">
              <div className="label"><i className="fas fa-tint"></i> Humidity:</div>
              <div>{this.state.humidity} %</div>
            </div>
            <div className="card">
              <div className="label"><i className="fas fa-fire"></i> Duff Percentage:</div>
              <div>{this.state.duffPercentage} %</div>
            </div>
          </div>
        {/* )}
        <button className="button" onClick={this.toggleContent}>
          {this.state.showContent ? "Hide Content" : "Show Content"}
        </button> */}
      </div>
    );
  }
}

ReactDOM.render(<Dashboard />, document.getElementById("root"));



