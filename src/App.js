import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: "entreprenant, polyvalant je suis pret a repondre aux exigance recquise pour passer le test.",
      imgSrc: "https://franchisematch.com/wp-content/uploads/2015/02/john-doe.jpg",
      profession: "Developer"
    },
    show: false,
    interval: 0
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({ interval: prevState.interval + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, interval } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Elapsed time since mount: {interval} seconds</p>
      </div>
    );
  }
}

export default App;

