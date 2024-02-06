import { useState } from "react";

const Converter = () => {
    const[hex, setHex] = useState("");
    const[rgb, setRgb] = useState("rgb(255, 255, 255)");

    const onChangeHandler = (ev) => {
        const {value} =  ev.target;
        setHex(value);
        let color = "rgb(..., ..., ...)";

        if (value.length === 7) {
            color = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value) ? `rgb(${parseInt(color[1], 16)}, ${parseInt(color[2], 16)}, ${parseInt(color[3], 16)})` 
            : null || "Error"
        } else if (value.length > 7) {
            color = "Error";
        }
        setRgb(color);
    }

    const BackgroundColor = {
        backgroundColor: rgb !== "Error" ? rgb : "red"
    }

    return(
        <div className="background-container" style={BackgroundColor}>
            <div>
              <input
                type="text"
                onChange={onChangeHandler}
                value={hex}
              />
            </div>
            <div>
            <p>{rgb}</p>
            </div>
        </div>
    )
}

export default Converter;