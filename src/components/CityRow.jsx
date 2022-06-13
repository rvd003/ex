import styles from "./CityRow.module.css";
 import { useEffect, useState } from "react"
 import axios from "axios"
 function CityRow({}) {

  const [todos,setTodos]=useState([]);
  const [page,setPage]=useState(1)
  useEffect(()=>{ 
      axios.get(`https://json-server-mocker-masai.herokuapp.com/cities?_page=${page}&_limit=10`).then((r)=>{
        setTodos(r.data)
      }); 
    
    console.log(todos)  
  },[page]);


  
  return (
    <>
     {todos.map((todo)=>(
        <div key={todo.id}>{todo.value}</div>
      ))}
    <tr data-testid="countries-container" className={styles.container}>
      <td> ID </td>
      <td> City Name </td>
      <td> Country Name </td>
      <td> Population </td>
    </tr>
    <tbody className="tbody">
                {todos.map((e)=>{
                     return <tr className="row">
                         <td>{e.id}</td>
                     <td className="name">{e.name}</td>
                     <td className="age">{e.country}</td>
                     <td className="age">{e.population}</td>
                   </tr> 
                })}
              </tbody>
  </>
  );
 }

export default CityRow;
