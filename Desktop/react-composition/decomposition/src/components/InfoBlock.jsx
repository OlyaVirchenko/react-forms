import Weather from "./Weather";
import TV from "./TV";
import Popular from "./Popular";

const InfoBlock = () => {
    return(
    <div style = {{display: 'flex'}}>
       <Weather />
       <Popular />
       <TV />
    </div>
    )
}

export default InfoBlock;

