import { useState } from "react";

const Toolbar = ({addItem}) => {
    const [name, setName] = useState('');
    const [timeZone, setTimeZone] = useState('');
    const [error, setError] = useState('');

    const onHandleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === '' || timeZone.trim() === '') {
            setError('Заполните все поля')
            return;
        }

        addItem({name, timeZone});
        setName('');
        setTimeZone('');
        setError('');
    }

    return (
        <form className="toolbar" onSubmit={onHandleSubmit}>
            {error ? <span className="error">{error}</span> : ''}
            <label>Название
                <input onChange = { e => setName(e.target.value)} value ={name} type="text" />
            </label>
            <label>Временная зона
                <input onChange = { e => setTimeZone(e.target.value)} value ={timeZone} type="text" />
            </label>
            <label>Временная зона
                <button type="submit">Добавить</button>
            </label>
        </form>
    )
}

export default Toolbar;