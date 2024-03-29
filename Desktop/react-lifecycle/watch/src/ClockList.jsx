import Clock from "./components/Clock";

const ClockList = ({timeList, removeItem}) => {
    <div>
        {timeList.map((item) =>
          <div key={item.id} className="time-list-item">
            <span>{item.name}</span>
            <Clock timeZone = {item.timeZone} />
            <button onClick = {() => removeItem(item.id)}>X</button>
          </div>
        )}
    </div>
}

export default ClockList;