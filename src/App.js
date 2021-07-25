
import React from 'react'
import './App.css';

class App extends React.Component {
  state = {
    Person: {
      fullName: "Wided Chedly",
      bio: "Learn at GOMYCODE ",
      imgSrc: "./ma photo.jpg",
      profession: "Full Stack Web Developer"
    },
    show: true,
    date: new Date()
  
}
  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


  render() {
    return (
      <>
        {this.state.show && (
        
          <>

<div className="elements">

<img src={this.state.Person.imgSrc} alt="ma photo"></img>

            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <h1>{this.state.Person.profession}</h1>

            </div>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>

            <br></br>
          </>
        )}

<div className="Click">  
        <button onClick={this.handleShowPerson}>click here</button>
        </div>
      </>
    );
  }
}

export default App;







  

  