import Link from 'next/link'
export default function Hero() {
    return  (
        <div>
            <h1>link</h1>
            <ul>
                <li><Link href="page1">page1</Link></li>
            </ul>
            <ul>
                <li><Link href="page2">page2</Link></li>
            </ul>
            <ul>
                <li><Link href="page3">page3</Link></li>
            </ul>
            <ul>
                <li><Link href="page4">page4</Link></li>
            </ul>
            <ul>
                <li><Link href="page5">page5</Link></li>
            </ul>
        </div>
    )
}