import React, { Component } from 'react';
import './App.css';
import User from './User'

// function App() {
//   return (
//     <div className="App">
//       Hello
//     </div>
//   );
// }



class App extends Component {

  // constructor(props) {
  //   super(props)
  //   console.log(this.props)
  //   this.onChange = this.onChange.bind(this)
  // }

  state = {
    show: true,
    users: [{name: 'James Bond'}, {name: 'Superman'}]
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...prevState,
      ...nextProps
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.users !== nextState.users || this.state.show !== nextState.show
  }

  onChange = (event, index) => {
    // const users = [...this.state.users]
    // const currentUser = {...users[index]}
    // currentUser.name = event.target.value;
    // users[index] = currentUser;

    // this.setState({
    //   users
    // })

    this.setState((state) => {
      const users = [...state.users]
      const currentUser = {...users[index]}
      currentUser.name = event.target.value;
      users[index] = currentUser;
      return {users}
    })
  }

  toggle = () => {
    this.setState(({show}) => ({
      show: !show
    }))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <button onClick={this.toggle}>Toggle</button>
        <button onClick={() => this.setState({show: true})}>Show</button>
        {this.state.show && this.state.users.map((user, index) => {
          return <User key={index} name={user.name} onChange={(event) => this.onChange(event, index)} />
        })}
      </div>
    )

    // return React.createElement('div', {className: 'App'}, React.createElement('p', null, 'Hello'))
  }

  getSnapshotBeforeUpdate() {

  }

  componentDidUpdate() {

  }

  componentWillUnmount() {
    
  }

  componentDidMount() {
    console.log('componentDidMount')
  }
}

export default App;
