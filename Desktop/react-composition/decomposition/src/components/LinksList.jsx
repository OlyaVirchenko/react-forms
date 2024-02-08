import Link from "./Link";

const LinksList = ({links}) => {
    <ul>
        {links.map((link, i)=>
          <li><Link key={i} href={link.href} text= {link.text}/></li>
        )}
    </ul>
}

export default LinksList;