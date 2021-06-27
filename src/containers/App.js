import React, { Component } from 'react';
import './App.css';
import { robots } from '../robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { render } from '@testing-library/react';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [] ,
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json();
    })
    .then(users => {
      this.setState({ robots: users});
    });

    console.log('componentDidMount');
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    this.setState({ searchField: event.target.value});
  }
  
  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    if (!robots.length) {
      return <h1 className='tc'>Loading data...</h1>
    } else {
      return (
        <div className='tc'>
              <h1 className='f1'>RoboFriends</h1>
              <SearchBox searchChange={ this.onSearchChange } />
              <Scroll>
                <ErrorBoundry>
                  <CardList robots={ filteredRobots }/>
                </ErrorBoundry>
              </Scroll>
        </div>
      );
    }
  }
}

export default App;
