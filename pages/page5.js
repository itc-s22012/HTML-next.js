import Link from 'next/link'
import style from '/styles/page5.module.css'

export default function page5() {
    return(
        <ul className={style.pop}>
    <li>
        <h2><Link href="/">Home</Link></h2>
    </li>
    <li>
        <h2><Link href="/">About</Link></h2>
    </li>
    <li>
        <h2><Link href="/">Topics</Link></h2>
    </li>
    <li>
        <h2><Link href="/">Link</Link></h2>
    </li>
</ul>
        )
    }