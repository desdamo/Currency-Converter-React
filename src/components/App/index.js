import React from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';

import currencies from 'src/data/currencies';

import './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      baseAmount: 5000,
      currency: 'United States Dollar',
    };

    this.handleClick = this.handleClick.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this);
    this.changeBaseAmount = this.changeBaseAmount.bind(this);
  }

  componentDidMount() {
    console.log('Je suis dans componentdidMount');
    document.title = `Convertisseur : Euros vers ${this.state.currency}`;
  }

  componentDidUpdate() {
    console.log('Je suis dans component DidUpdate');
    document.title = `Convertisseur : Euros vers ${this.state.currency}`;
  }

  handleClick() {
    const { open } = this.state;

    this.setState({ open: !open });
  }

  computeResult() {
    const currency = currencies.find(
      (curr) => curr.name === this.state.currency,
    );

    const result = this.state.baseAmount * currency.rate;

    return result.toFixed(2);
  }

  changeCurrency(name) {
    this.setState({ currency: name });
  }

  changeBaseAmount(value) {
    this.setState({ baseAmount: value });
  }

  render() {
    console.log('Render du composant App');

    return (
      <div className="app">
        <Header
          onChangeBaseAmount={this.changeBaseAmount}
          baseAmount={this.state.baseAmount}
        />
        {}
        <button
          type="button"
          className={this.state.open ? 'app__toggler app__toggler--open' : 'app__toggler'}
          onClick={this.handleClick}
        >
          =
        </button>
        {
        this.state.open
        && (
          <Currencies
            onItemClick={this.changeCurrency}
            currencies={currencies}
          />
        )
      }
        <Result value={this.computeResult()} currency={this.state.currency} />
      </div>
    );
  }
}
export default App;
