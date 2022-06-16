import React from 'react';
import jobsData from "./Services/data.json";
import List from './Components/List';
import Select from './Components/Select';
import "./App.css";


class App extends React.Component{
     constructor(props){
       super(props);
       this.state = {
        tags: new Set(),
        data: jobsData        
       }
     }        
    
    handleAdd = (event) => {
      const {data, tags} = this.state
      const item = event.target.innerText         
        this.setState(prevState => {
          prevState.tags.add(item)
          const data = this.filterData(prevState)
          return{data}
      })    
    }
    
    handleRemove = (event) => {      
      const {data, tags} = this.state
      const item = event.target.id;
      this.setState(prevState => {        
        prevState.tags.delete(item)
        const data = this.filterData(prevState)     
        return{data}      
      })                     
    } 
    
    handleClear = () => {
        this.setState({
          tags: new Set(),
          data: jobsData
        })            
      }
      
      filterData = (prevState) => {
        return jobsData.filter((job) => {
          return [...prevState.tags].every((tags) => {
            return job.role === tags || job.level === tags || job.languages.includes(tags) || job.tools.includes(tags)
        })
      });
      }
     
    render(){    
      return( 
        <div>
          <header className='header'>
          </header>
          <Select tags={this.state.tags} handleRemove={this.handleRemove} handleClear={this.handleClear}/> 
          <List podaci={this.state.data} handleAdd={this.handleAdd}/>
        </div>
        );    
  }
  }

export default App;