import React, { Component } from 'react';

const ApiContext = React.createContext();

const apiURL = "http://51.77.82.133:86/api/quotations/QUO_5fb3acb3a0f18";

export class ApiContextProvider extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      loaded:false,
      dati:{}
    }
  }
   
  componentDidMount(){
    fetch(apiURL)
    .then(response => response.json())
    .then(res =>{
      this.setState({
        dati: res.results.data,
        loaded: true
      }, () =>{console.log("state ", this.state);})
    })
    .catch(err =>{
      console.error(err);
    })
  }

  render() {
    return (
      <>
      {(this.state.loaded) && 
        <div>
          <ApiContext.Provider value={this.state.dati}>
            {this.props.children}
          </ApiContext.Provider>
        </div>}
      </>
      
    )
  }
}

export default ApiContext
