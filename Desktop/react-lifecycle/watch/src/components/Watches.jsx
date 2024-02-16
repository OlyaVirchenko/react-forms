import ClockList from "../ClockList";
import Toolbar from "./Toolbar";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Watches = () => {
    const [arr, setArr] = useState([
        {id: uuidv4(), name: 'Москва', timeZone: 3}
    ])

    const addItem = (item) => {
        item.id = uuidv4();
        setArr([...arr, item])
    }

    const removeItem = (id) => {
        setArr(arr.filter((item) => item.id !== id))
    }

    return(
        <>
          <Toolbar addItem={addItem} />
          <ClockList timeList={arr} removeItem={removeItem} />
        </>
    )
}

export default Watches;