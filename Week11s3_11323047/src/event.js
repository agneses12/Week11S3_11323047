import React, { Component } from 'react';

class EventHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namaBaru: '',
      umurBaru: ''
    };
  }

  handleNamaChange = (event) => {
    this.setState({ namaBaru: event.target.value });
  }

  handleUmurChange = (event) => {
    this.setState({ umurBaru: event.target.value });
  }

  handleSubmit = () => {
    const { namaBaru, umurBaru } = this.state;
    if (namaBaru.trim() !== '' && !isNaN(parseInt(umurBaru))) {
      const newData = {
        nama: namaBaru,
        umur: parseInt(umurBaru)
      };
      this.props.addData(newData);
      this.setState({ namaBaru: '', umurBaru: '' });
    } else {
      alert("Input tidak valid. Pastikan Anda memasukkan nama dan umur yang valid.");
    }
  }

  handleClearData = () => {
    this.props.clearData();
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Nama:
            <input type="text" value={this.state.namaBaru} onChange={this.handleNamaChange} />
          </label>
          <label>
            Umur:
            <input type="text" value={this.state.umurBaru} onChange={this.handleUmurChange} />
          </label>
          <button type="button" onClick={this.handleSubmit}>Tambah Data</button>
        </form>
        <button type="button" onClick={this.handleClearData}>Hapus Semua Data</button>
      </div>
    );
  }
}

export default EventHandler;
