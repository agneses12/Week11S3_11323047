import React, { Component } from 'react';

class TabelData extends Component {
  render() {
    const { data } = this.props;
    const rows = data.map((item, index) => (
      <tr key={index}>
        <td>{item.nama}</td>
        <td>{item.umur}</td>
      </tr>
    ));

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Umur</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default TabelData;
