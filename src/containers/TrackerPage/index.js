import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSymbols } from '../../actions';
import TrackerList from '../TrackerList'

class TrackerPage extends Component {
  componentDidMount() {
    this.props.fetchSymbols();
  }

  render() {
    const { symbols, portfolio } = this.props;
    return <div className="card">
        <header className="card-header">
          <p className="card-header-title center is-size-5 has-text-weight-bold">
            Click item to add to Portfolio or click item to remove from Portfolio
          </p>

         
        </header>
        <footer className="card-footer" />
        <div className="card-content">
          <div className="content columns">
            <div className="column">
              <h3 className="is-size-5 has-text-weight-bold">
                Cryptocurrency TRACKER!
              </h3>
              <TrackerList symbols={symbols} />
            </div>
            <div className="column">
              <h3 className="is-size-5 has-text-weight-bold">Portfolio</h3>
              <TrackerList portfolio={portfolio} />
            </div>
          </div>
        </div>
      </div>;
  }
}

const mapStateToProps = state => ({
  symbols: state.symbols,
  portfolio: state.portfolio
});

const mapDispatchToProps = {
  fetchSymbols
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackerPage);
