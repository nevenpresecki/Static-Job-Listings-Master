import "./List.css";
import "../App.css";

function Item({element, handleAdd}){    
    
    const {company, contract, featured, id, languages, level, location, logo, 
        position, postedAt, role, tools} = element

    const languagesList = () => languages.map((element, index) => 
                {return <p key={index} onClick={handleAdd}>{element}</p>
                })   
    return(
        <main className="list">
            <div className="image">
                <img src={logo}></img>
            </div>
            <div className="text">
                <div className="firstRow">   
                    <h6>{company}</h6>
                    {element.new && <p>New!</p>}
                    {featured && <p>Featured</p>}
                </div>
                <div className="secondRow">
                    <h4>{position}</h4>                        
                </div>
                <div className="thirdRow">
                        <p onClick={handleAdd}>{role}</p>
                        <p onClick={handleAdd}>{level}</p>
                        {languagesList()}
                </div>                
                <div className="fourthRow">
                    <p>{postedAt}</p>
                    <span className="dot"></span>
                    <p>{contract}</p>
                    <span className="dot"></span>
                    <p>{location}</p>
                </div>
            </div>     
        </main> 
    );
}

export default Item;