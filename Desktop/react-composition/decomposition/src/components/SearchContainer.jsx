import Link from "./Link";

const SearchContainer = () => {
    return(
        <form>
            <Link href="#" img={'https://icons-for-free.com/download-icon-Yandex+Logo-1331419557811444064_256.png'}/>
            <input type="text" />
            <small>Поиск...</small>
            <button>Поиск</button>
        </form>
    )
}

export default SearchContainer;