import React, { Component } from 'react';

class FilterObjects extends Component{
    constructor(){
        super()


        this.state ={
            teammates: [
                {
                    name: 'Cam Jordan',
                    title: 'Edge Rusher',
                    age: 31
                },{
                    name: 'Alvin Kamara',
                    title: 'Running Back',
                    age: 25
                },{
                    name: 'Drew Brees',
                    title: 'quarterBack',
                    age: 41
                }],

                userInput: '',
                filteredTeammates: []
            }
        }

    handleChange(val) {
      this.setState({ userInput: val });
    }
  
    filterEmployees(prop) {
      let teammates = this.state.teammates;
      let filteredTeammates = [];
  
      for ( let i = 0; i < teammates.length; i++ ) {
        if ( teammates[i].hasOwnProperty(prop) ) {
          filteredTeammates.push(teammates[i]);
        }
      }
  
      this.setState({ filteredTeammates: filteredTeammates });
    }
  


        render() {
            return (
              <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.teammates, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.teammates(this.state.teammates) }> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.userInput, null, 10) } </span>
              </div>
            )
          }
        }

export default FilterObjects