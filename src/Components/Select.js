import "./Select.css";
import "../App.css";

function Select ({tags, handleRemove, handleClear}){

    const style = {opacity: [...tags].length > 0 ? 1 : 0};    
 
    return(
            <div style={style} className="select">
                <div>
                {[...tags].map(tag  => {
                    return (
                    <div className="selectItem" key={tag}>                    
                        <p>{tag}</p>
                        <button className="button" onClick={handleRemove} id={tag}>
                        <img src="./images/icon-remove.svg" id={tag}></img>
                        </button>
                    </div>
                    )
                })}
                </div>
                <span className="clear" onClick={handleClear}>Clear</span>           
            </div>
    )
}

export default Select;                       
                 