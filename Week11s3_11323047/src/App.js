import React, { Component } from 'react';
import './App.css';
import TabelData from './TableData.js';
import EventHandler from './event.js'; // Impor file EventHandler.js

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.defaultData
    };
  }

  addData = (newData) => {
    this.setState(prevState => ({
      data: [...prevState.data, newData]
    }));
  }

  clearData = () => {
    this.setState({ data: [] });
  }

  render() {
    return (
      <div className="container">
        <h1>Data Pengguna</h1>
        <EventHandler addData={this.addData} clearData={this.clearData} />
        <TabelData data={this.state.data} />
        <div className="image-container">
          <img src={this.props.imageUrl} alt="Placeholder" />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  defaultData: [
    { nama: 'John', umur: 25 },
    { nama: 'Doe', umur: 30 },
    { nama: 'Jane', umur: 28 }
  ],
  imageUrl: 'https://via.placeholder.com/150'
};

export default App;
