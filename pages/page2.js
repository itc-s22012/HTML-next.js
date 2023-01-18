import Link from 'next/link'
import style from '/styles/page2.module.css'

export default function page2() {
    return(
        <div className={style.nav}>
        <div className={style.Link}>
        <div className={style.box}>
            <h1>Cafe Prep</h1>
        </div>
        <nav className={style.style}>
            <h2>Drink</h2>
            <ul>
                <li>Coffee</li>
                <li>Latte</li>
                <li>Espresso</li>
            </ul>
        </nav>
    </div>
    </div>
    )
}