const Card = ({card}) => {
    return (
        <div className="card">
            {card.img ? <img src={card.img} alt="Дед Мороз"/> : ''}
            <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
                <p className="card-text">{card.text}</p>
                <button>Go somewhere</button>
            </div>
        </div>
    )
}

export default Card