import { useState } from "react";

const NoteItem = ({addNote}) => {
    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    const onhandleSubmit = (e) => {
        e.preventDefault();
        if (content.trim() === '') {
            setError('Введите текст')
            return;
        }

        addNote({content});
        setContent('');
        setError('');
    }

    return(
      <form name="noteItem" onSubmit={onhandleSubmit}>
        <h3>New Note</h3>
        {error ? <span className="error">{error}</span> : ''}
        <textarea onChange={e => setContent(e.target.value)} value={content}></textarea>
        <button>➤</button>
      </form>  
    )
}

export default NoteItem;