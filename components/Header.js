import Image from "next/image";
import hulu from './hulu-white.png';
function Header() {
    
    return (
        <header className="" >
            <h1>This is the header</h1>
            
            <Image 
            className="object-contain"
            src={hulu}
            alt="Picture of the author"
            width={200} height={100} />
        </header>
    )
}

export default Header

