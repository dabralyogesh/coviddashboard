import React from 'react';
import Card from '../Components/Card';
import './App.css';
import CircularIndeterminate from '../Components/Loading';
import Header from '../Components/Header';

class App extends React.Component{

  constructor(){
    super();
    this.state={
      countrydetail: [],
      searchfield:''
    }
   }
  componentDidMount(){
    fetch('https://api.covid19api.com/summary')
      .then(response => response.json())
      .then(data => this.setState({countrydetail:data.Countries}))
  }

  onSearchChange = (event) =>{
    this.setState({searchfield:event.target.value})
  }

  render(){
     const filteredCountry = this.state.countrydetail.filter(countryname => {
        return countryname.Country.toLowerCase().includes(this.state.searchfield.toLowerCase());
      })

     if(this.state.countrydetail.length === 0)
      {
        return (<div className="loadbar">
                    <CircularIndeterminate/>
                </div>)
      }
    return(
      <div className="whole"> 
         <Header searchChange={this.onSearchChange}/>
        <div className="content">
         <Card countryarray={filteredCountry}/>
        </div>
       </div>
    )
  }
}
export default App;
