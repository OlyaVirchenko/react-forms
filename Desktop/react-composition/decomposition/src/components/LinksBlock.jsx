import LinksList from "./LinksList";

const LinksBlock = () => {
    const News = () => [
        {href: "#", text: 'Новость 1'},
        {href: "#", text: 'Новость 2'},
        {href: "#", text: 'Новость 3'}
    ]

    return(
        <div>
            <h4>Новости СМИ</h4>
            <LinksList links = {News} />
        </div>
    )
}

export default LinksBlock;