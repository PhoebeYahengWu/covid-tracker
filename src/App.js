import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './API'
import styles from './App.module.css';
class App extends Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
    console.log(fetchedData)
  }

  handleCountryChange = async (country) => {
    console.log(country)
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country})
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}> 
      <h1 className={styles.title}>COVID-19 Tracker</h1>
      <Cards data = {data} />
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={data} country={country}/>
      </div>
    );
  }
}
export default App;