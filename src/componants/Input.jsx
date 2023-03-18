import React,{useState} from "react";
import List from "./List";

function Input(){

  const [activity,setActivity ] = useState('')
  const [items,setItems] = useState([])
        function handleChange(event){
          let newText = event.target.value;
          setActivity(newText);
        }

        function addToList(){
          var dateObj = new Date();
          var month = dateObj.getUTCMonth() + 1; 
          var day = dateObj.getUTCDate();
          var year = dateObj.getUTCFullYear();

          let newdate = "  (" + day + "/" + month + "/" + year +")";
          setItems([activity+newdate,...items]);
          setActivity('')
        }

        function deleteFromList(index){
          setItems(items.filter((item,indexNum)=>{
            return (indexNum !== index)}
          ))
        }


    return(<div>
                <div className="input">
                  <input onChange={handleChange} type="text" placeholder="🖊️ Add item..." value={activity}/>
                  <i onClick={activity===''?null:addToList} className="fas fa-plus"></i>
                </div>
                {items.map((arrayItems,index)=>{
                  return<List key={index} id ={index}  item={arrayItems} deleteCheck={deleteFromList} />
                })
                
                }
      </div>
    )
       
}
export default Input;






