import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer>
        <ul className="flex space-x-3 text-gray-500 text-sm justify-center items-center pb-5 flex-col md:flex-row">
          <Link href={""}>
            <li className="hover:font-semibold">Tesla © 2023</li>
          </Link>
          <Link href={""}>
            {" "}
            <li className="hover:font-semibold">Privacy & Legal</li>
          </Link>
          <Link href={""}>
            <li className="hover:font-semibold">Vehicle Recalls</li>
          </Link>
          <Link href={""}>
            <li className="hover:font-semibold">Contact</li>
          </Link>
          <Link href={""}>
            {" "}
            <li className="hover:font-semibold">Careers</li>
          </Link>
          <Link href={""}>
            {" "}
            <li className="hover:font-semibold hidden md:inline">News</li>
          </Link>
          <Link href={""}>
            {" "}
            <li className="hover:font-semibold hidden md:inline">Locations</li>
          </Link>
          <Link href={""}>
            {" "}
            <li className="hover:font-semibold hidden md:inline">Engage</li>
          </Link>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
