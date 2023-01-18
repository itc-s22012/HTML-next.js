import Link from 'next/link'
import style from '/styles/page1.module.css'

export default function page1() {
    return(
        <ul className={style.nav}>
        <li><Link href="/">TOP</Link></li>
        <li><Link href="/">ABOUT</Link></li>
        <li><Link href="/">NEWS</Link></li>
        <li><Link href="/">LINK</Link></li>
    </ul> 
    )
}