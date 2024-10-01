import Link from "next/link"

export default function Header(){
    return(
        <div className="header">
            <ul className="header-buttons">
                <Link href={"/"}>
                <li>Home</li>
                </Link>
                <Link href={"/about-me"}>
                <li>About me</li>
                </Link>
                <Link href={"/education"}>
                <li>Education</li>
                </Link>
                <Link href={"/skills"}>
                <li>Skills</li>
                </Link>

            </ul>
        </div>
    )
}