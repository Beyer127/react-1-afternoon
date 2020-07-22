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
                filteredEmployee: []
            }
        }


    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.teammates, null, 10) }</span>
                <input className="inputLIne" onChange={ (e) => this.handleChange(e.target.value) }/>
                <button className="confirmationButton"></button>
                <span className="resultBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredTeammates, null, 10) }</span>
            </div>
        )
    }
}

export default FilterObjects