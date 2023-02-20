import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={"/assets/logo.svg"} width={180} height={60} alt="fashion" />
    </Link>
  );
};

export default Logo;
