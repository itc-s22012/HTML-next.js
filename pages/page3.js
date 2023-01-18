import Link from 'next/link'
import style from '/styles/page3.module.css'

export default function page3() {
    return(
        <div className={style.contents}>
    <h1>Layout</h1>
    <div className={style.column}>
        <div className={style.box}>
            <h2>Box 1</h2>
            <p>
                hello world hello world hello world hello world
            </p>
            <p>
            hello world hello world hello world hello world
            </p>
        </div>
        <div className={style.box}>
            <h2>Box 2</h2>
            <p>
                hello world hello world hello world hello world hello world hello world hello world hello world
            </p>
        </div>
    </div>
    
    <div className={style.column}>
        <div className={style.box}>
            <h2>Box 3</h2>
            <p>
                hello world hello world hello world hello world hello world hello world hello world hello world
            </p>
        </div>
        <div className={style.box}>
            <h2>Box 4</h2>
            <p>
                hello world hello world hello world hello world hello world hello world hello world hello world
            </p>
        </div>
    </div>
</div>
    )
}
