import Image from "next/image";
import myphoto from "../../public/images/WhatsApp Image 2024-08-20 at 12.47.20_e95e0c71.png"


export default function Home() {
  return (
    
    <div className="homeConatiner">
    <div className="childContainer">
      Hey,
      <br />
      My Name is  <span className="pinkcolour">Usman</span>
      <br />
      I am Next.js Developer

    </div>
    <div className="Image">
    <Image className="intro-pic"
    src={myphoto}
    alt="profile pic"
    />
    </div>
  </div>
 
  );
}
