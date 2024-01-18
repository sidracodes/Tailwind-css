import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/shared/Wrapper";
const Header = () => {
  return (
    <>
    <section className="bg-blue-50 ">
    <Wrapper>
      <header className="flex items-center justify-between py-8 top-0 sticky ">
        <div>
          {/* <h1 className="text-pink-300 text-3xl font-bold" >Logo</h1> */}
          <Image src={Logo} alt="panaverse dao logo" height={100} width={100} />
        </div>

        <ul className="flex space-x-5 font-medium capitalize">
          <li>
            <Link href={"/"}> home</Link>
          </li>
          <li> <Link href={"/About"}> about us</Link></li>
          <li> <Link href={"/Applynow"}> apply</Link></li>
          <li> <Link href={"/Community"}> community</Link></li>
          <li>
            <Link href={"/Syllabus"}>syllabus</Link>
          </li>
          <li> <Link href={"/Contact"}> contact us</Link></li>
         </ul>
        
      </header>
      </Wrapper>
      </section>
    </>
  );
};

export default Header;
