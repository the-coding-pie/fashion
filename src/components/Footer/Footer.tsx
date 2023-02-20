import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black my-container py-24 flex justify-between items-start">
      <div className="left">
        <h4 className="text-white mb-4 font-black text-4xl">FASHION</h4>
        <p className="mb-6 text-gray-500 text-sm leading-6">
          Complete your style with awesome <br /> clothes from us.
        </p>
        <div className="social-media-links flex items-center gap-x-3">
          <button className="w-[36px] h-[36px]">
            <Image
              src={"/assets/logos/facebook.png"}
              width={52}
              height={52}
              alt="facebook"
              className="w-full h-full object-cover"
            />
          </button>
          <button className="w-[36px] h-[36px]">
            <Image
              src={"/assets/logos/instagram.png"}
              width={52}
              height={52}
              alt="instagram"
              className="w-full h-full object-cover"
            />
          </button>
          <button className="w-[36px] h-[36px]">
            <Image
              src={"/assets/logos/twitter.png"}
              width={52}
              height={52}
              alt="twitter"
              className="w-full h-full object-cover"
            />
          </button>
          <button className="w-[36px] h-[36px]">
            <Image
              src={"/assets/logos/linkedin.png"}
              width={52}
              height={52}
              alt="linkedin"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>

      <div className="links flex justify-between gap-x-24">
        <ul className="company flex flex-col text-sm gap-y-4 text-gray-500">
          <h4 className="text-gray-100">Company</h4>

          <li>
            <Link href={"#"}>About</Link>
          </li>
          <li>
            <Link href={"#"}>Contact us</Link>
          </li>
          <li>
            <Link href={"#"}>Support</Link>
          </li>
          <li>
            <Link href={"#"}>Careers</Link>
          </li>
        </ul>
        <ul className="quick-link flex flex-col text-sm gap-y-4 text-gray-500">
          <h4 className="text-gray-100">Quick Link</h4>

          <li>
            <Link href={"#"}>Share Location</Link>
          </li>
          <li>
            <Link href={"#"}>Orders Tracking</Link>
          </li>
          <li>
            <Link href={"#"}>Size Guide</Link>
          </li>
          <li>
            <Link href={"#"}>FAQs</Link>
          </li>
        </ul>
        <ul className="legal flex flex-col text-sm gap-y-4 text-gray-500">
          <h4 className="text-gray-100">Legal</h4>

          <li>
            <Link href={"#"}>Terms & conditions</Link>
          </li>
          <li>
            <Link href={"#"}>Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
