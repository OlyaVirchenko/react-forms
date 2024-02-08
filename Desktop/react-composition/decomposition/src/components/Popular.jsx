import Link from "./Link"

const Popular = () => {
  return (
  <div style={{border: 'solid 1px grey'}}>
    <h4>Посещаемое</h4>
    <li><Link href={'#'} text={'О сталинках'}/></li>
    <li><Link href={'#'} text={'Рынок недвижимости'}/></li>
    <li><Link href={'#'} text={'Реновация'}/></li>
  </div>
  )
}

export default Popular;