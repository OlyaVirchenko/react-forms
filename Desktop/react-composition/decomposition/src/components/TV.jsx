import Link from "./Link"

const TV = () => {
  return (
  <div style={{border: 'solid 1px grey'}}>
    <h4>Посещаемое</h4>
    <li><Link href={'#'} text={'В мире животных'}/></li>
    <li><Link href={'#'} text={'Кино'}/></li>
    <li><Link href={'#'} text={'Беременна в 16'}/></li>
  </div>
  )
}

export default TV;