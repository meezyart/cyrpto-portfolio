import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToPortfolio, removeFromPortfolio, checkifActive } from '../../actions';



class TrackerList extends Component {
 
  render() {
    const {
      symbols,
      addToPortfolio,
      removeFromPortfolio,
      portfolio
    } = this.props;
    // console.log(symbols, 'portfolio', portfolio);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>
              <abbr title="Symbol">Symbol</abbr>
            </th>
            <th>
              <abbr title="Played">Name</abbr>
            </th>
            <th>
              <abbr title="USD">USD</abbr>
            </th>
            <th>
              <abbr title="EUR">EUR</abbr>
            </th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>
              <abbr title="Symbol">Symbol</abbr>
            </th>
            <th>
              <abbr title="Played">Name</abbr>
            </th>
            <th>
              <abbr title="USD">USD</abbr>
            </th>
            <th>
              <abbr title="EUR">EUR</abbr>
            </th>
          </tr>
        </tfoot>
        <tbody>
          {symbols &&
            Object.keys(symbols).map((item, index) => {
              return <tr key={symbols[item].sym} onClick={() => {
                    addToPortfolio(item, symbols[item]);
                    checkifActive(symbols[item]);
                  }} className={symbols[item].selected ? 'is-selected' : ''}>
                  <th>{index + 1}</th>
                  <td>{symbols[item].sym}</td>
                  <td>{`$${symbols[item].price.USD}`}</td>
                  <td>{`$${symbols[item].price.EUR}`}</td>
                </tr>;
            })}

          {portfolio &&
            portfolio.map((port, index) => {
              // console.log(port.item.price);
              return (
                <tr
                  key={index}
                  onClick={() => removeFromPortfolio(index, port)}
                >
                  <th>{index + 1}</th>
                  <td>{port.item.sym}</td>
                  <td>{`$${port.item.price.USD}`}</td>
                  <td>{`$${port.item.price.EUR}`}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}

const mapDispatchToProps = {
  addToPortfolio,
  removeFromPortfolio,
  checkifActive
};

export default connect(null,mapDispatchToProps)(TrackerList);
