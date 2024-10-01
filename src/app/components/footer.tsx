import Link from "next/link"

export default function Footer(){
    return(
        <div className="Footer">
            <div className="Footer-content">
            © 2024 Usman Khan | All Rights Reserved
            </div>
            <ul className="Footer-buttons">
                <Link href={"https://github.com/pixelman10"}>
                <li>Github</li>
                </Link>
                <Link href={"https://www.linkedin.com/in/usman-khan-aa34842b5/"}>
                <li>Linkedin</li>
                </Link>
                <Link href={"https://www.instagram.com/khan_usman27/"}>
                <li>instagram</li>
                </Link>

            </ul>
        </div>
    )
}