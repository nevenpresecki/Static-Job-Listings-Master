import "./List.css";
import "../App.css";
import Item from '../Components/Item';

function List ({podaci, handleAdd}){ 
    return podaci.map(element => {            
            return <Item key={element.id} element={element} handleAdd={handleAdd}/>           
        })
    
        
        

}

export default List;                       
                 
    
