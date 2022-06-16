import React from 'react';
import jobsData from "./Services/data.json";
import List from './Components/List';
import Select from './Components/Select';


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
        this.setState({
          tags: tags.add(event.target.innerText),
          data: this.filterData()
      })    
    }
    
    handleRemove = (event) => {
      const {data, tags} = this.state
      this.setState({          
          tags: tags.delete(event.target.id),
          data: this.filterData()      
      })                     
    } 
    
    handleClear = () => {
        this.setState({
          tags: new Set(),
          data: jobsData
        })            
      }      
       
      filterData = () => {
        const {data, tags} = this.state
        return (jobsData.filter((job) => {
          return [...tags].every((tags) => {
            return job.role === tags || job.level === tags || job.languages.includes(tags) || job.tools.includes(tags)
        })
      }))
      } 
      
     
    render(){
      console.log(this.state.tags)      
      return( 
        <div>
          {[...this.state.tags].length ? <Select tags={this.state.tags} handleRemove={this.handleRemove} handleClear={this.handleClear}/> : null} 
          <List podaci={this.state.data} handleAdd={this.handleAdd}/>
        </div>
        );    
  }
  }

export default App;