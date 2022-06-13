import React, { useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import "./styles.css";
import CityRow from "./components/CityRow"
import axios from "axios"


export default function App() {
  const [data, setData] = useState([{}]);

  const [todos,setTodos]=useState([]);
  const [page,setPage]=useState(1)
  useEffect(()=>{ 
      axios.get(`https://json-server-mocker-masai.herokuapp.com/cities?_page=${page}&_limit=10`).then((r)=>{
        setTodos(r.data)
      }); 
    
    console.log(todos)  
  },[page]);
  return (
    <div className="App">
      <div id="loading-container"></div>
      <table>
        <tr>
          <th>
            ID
          </th>
          <th>
            CITY NAME
          </th>
          <th>
            COUNTRY NAME
          </th>
          <th>
            POPULATION
          </th>
          </tr>
        
      </table>

      <div>
        <CityRow/>
        <ButtonComponent id="SORT_BUTTON" title={`Sort by Increasing Population`} />
        <ButtonComponent title="PREV" id="PREV" />
        <ButtonComponent id="NEXT" title="NEXT" />

      </div>
    </div>
  );
}
