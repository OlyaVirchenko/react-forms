import { useState } from "react";

const StepsForm = (handleSubmit) => {
    const [error, setError] = useState('');
    const [date, setDate] = useState('');
    const [dist, setDist] = useState('');

    const onHandlerSubmit = (e) => {
        e.preventDefault();
        if (date.trim() === '' || dist.trim() === '') {

            setError('Пожалуйста, заполните все поля');
            return;
        }
        handleSubmit({date, dist});
        setDate('');
        setDist('');
        setError('');
    }

    return (
        <>
         {error ? <p className="err-mess">{error}</p> : ''}
         <form onSubmit={onHandlerSubmit}>
            <label htmlFor="date">Дата (ДД.MM.ГГ)</label>
            <input type="text" id="date" onChange={e => setDate(e.target.value)} value={date}/>
            <label htmlFor="dist">Пройдено км</label>
            <input type="text" id="dist" onChange={e => setDist(e.target.value)} value={dist}/>
            <input type="submit" value={'OK'}/>
         </form>
        </>
    )
}

export default StepsForm;