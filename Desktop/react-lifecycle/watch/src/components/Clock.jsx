import { useState, useEffect } from "react";

const Clock = ({timeZone}) => {
    timeZone = Number(timeZone);

    const setTimeZone = () => {
        const addZero = i => {
            return i < 10 ? '0' + i : i
        }

        const get24Hours = n => {
            return n > 23 ? n - 24 : n
        }

        let day = new Date();

        let h = get24Hours(day.getUTCHours() + timeZone);
        let min = addZero(day.getUTCMinutes());
        let sec = addZero(day.getUTCSeconds());

        let time = addZero(h) + ':' + min + ':' + sec;

        return time;
    }

    const [ctime, setTime] = useState(setTimeZone())
    
    useEffect(() => {
        const interval = setInterval(() => setTime(setTimeZone()), 1000);
        return () => clearInterval(interval)
    })

    return (
        <span>{ctime}</span>
    )
}

export default Clock;