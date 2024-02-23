class Dashboard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
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
          {this.state.showContent && (
            <div className="content">
              <div className="card">
                <div className="label">Temperature: </div>
                <div>{this.state.temperature} °C</div>
              </div>
              <div className="card">
                <div className="label">Humidity: </div>
                <div>{this.state.humidity} %</div>
              </div>
              <div className="card">
                <div className="label">Duff Percentage: </div>
                <div>{this.state.duffPercentage} %</div>
              </div>
            </div>
          )}
          <button className="button" onClick={this.toggleContent}>
            {this.state.showContent ? "Hide Content" : "Show Content"}
          </button>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Dashboard />, document.getElementById("root"));
  