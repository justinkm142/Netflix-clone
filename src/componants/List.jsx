import React ,{useState} from "react";


function List (props){

    const [check, setCheck] = useState(false);

    function checked(){
        setCheck(!check);
    }

    return (
        <div className="todos">
                  <div className="todo">
                    <div className="left">
                      <input onChange={checked} type="checkbox" name="" id="" />
                      <p style={{textDecoration: check? "line-through": "none"}}>{props.item}</p>
                    </div>
                    <div className="right">
                      <i onClick={()=>{props.deleteCheck(props.id)}} className="fas fa-times"></i>
                    </div>
                  </div>
        </div>
        )
}

export default List;