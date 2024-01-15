import moment from 'moment';
import 'moment/locale/ru'
import './App.css';

const currentDate = new Date();

const Calendar = (props) => {
  const sourceDate = moment(props.date);
  const [currentDay, currentMonth, currentYear] = sourceDate.format('LL').split(' ');
  const [month, year] = sourceDate.format('MMM YYYY').split(' ');
  const startDayInMonth = moment(new Date(+year,sourceDate.month(), 1)).isoWeekday() - 1;
  const quantityDaysInCurrentMonth = sourceDate.daysInMonth();
  const quantityDaysInPrevMonth = sourceDate.subtract(1, 'month').daysInMonth();
  let counter;
  const daysInMonth = Array(42).fill(null).map((e, i) => {
    if (i < startDayInMonth) {
      return {number: quantityDaysInPrevMonth -startDayInMonth + i + 1, type: 'otherMonth'};
    }
    if (counter + 1 > quantityDaysInCurrentMonth) {
      return {number: i -quantityDaysInCurrentMonth - startDayInMonth + 1, type: 'otherMonth'}
    }
    counter = i - startDayInMonth + 1;
    return {number: i - startDayInMonth + 1, type: counter === +currentDay ? 'currentDay' : ''};
  }).reduce((acc, prev) => {
    if (acc[acc.length - 1].length === 7) {
      acc.push([]);
    }
    acc[acc.length - 1].push(prev);
    return acc;
  }, [[]]).map((week) => {
    const result = week.map((day) => {
      let dayClass = ''
      if (day.type === 'otherMonth') {
        dayClass = 'ui-datepicker-other-month';
      }
      if (day.type === 'currentDay') {
        dayClass = 'ui-datepicker-today';
      }
      return (
        <td
          key={Math.random()}
          className={dayClass}
        >
          {day.number}
        </td>
      )
    });
    return <tr key={Math.random()}>{result}</tr>
  })

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">Среда</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{currentDay}</div>
          <div className="ui-datepicker-material-month">{currentMonth}</div>
          <div className="ui-datepicker-material-year">{currentYear}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{month}</span>&nbsp;<span className="ui-datepicker-year">{year}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col/>
          <col/>
          <col/>
          <col/>
          <col/>
          <col className="ui-datepicker-week-end"/>
          <col className="ui-datepicker-week-end"/>
        </colgroup>
        <thead>
        <tr>
          <th scope="col" title="Понедельник">Пн</th>
          <th scope="col" title="Вторник">Вт</th>
          <th scope="col" title="Среда">Ср</th>
          <th scope="col" title="Четверг">Чт</th>
          <th scope="col" title="Пятница">Пт</th>
          <th scope="col" title="Суббота">Сб</th>
          <th scope="col" title="Воскресенье">Вс</th>
        </tr>
        </thead>
        <tbody>
        {daysInMonth}
        </tbody>
      </table>
    </div>
  )
}


function App() {
  return (
    <>
      <Calendar date={currentDate}/>
    </>
  );
}

export default App;
