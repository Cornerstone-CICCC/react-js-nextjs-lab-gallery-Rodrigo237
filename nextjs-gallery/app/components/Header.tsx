import Link from "next/link"

export default function Header(){
    return(
        <nav className="p-4 bg-gray-900 text-white flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/login">Login</Link>
        </nav>
    );
}