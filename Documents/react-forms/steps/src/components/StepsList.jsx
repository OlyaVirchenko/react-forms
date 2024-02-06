const StepsList = ({items, removeItem}) => {
   <>
     <div className="list-titles">
        <p>Дата (ДД.ММ.ГГ)</p>
        <p>Пройдено км</p>
        <p>Действия</p>
     </div>
     <ul>
       {items.map((el)=>
         <li key = {el.id}>
         <p>{el.date}</p> 
         <p>el.dist</p>
         <button omClick={() => removeItem(el.id)}>X</button>
         </li>
       )} 
     </ul>
   </> 
}

export default StepsList;