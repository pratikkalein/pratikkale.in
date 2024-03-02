import Bio from "@/components/bio";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { SiSessionize } from "react-icons/si";
import Profilephoto from "./profile-photo";

export default async function profile() {
  const links = [
    { href: "https://github.com/pratikkalein", icon: <FaGithub className="h-6 w-6" /> },
    { href: "https://www.linkedin.com/in/pratikkalein/", icon: <FaLinkedin className="h-6 w-6" /> },
    { href: "https://x.com/pratikkalein", icon: <FaXTwitter className="h-6 w-6" /> },
    { href: "https://instagram.com/pratikkalein", icon: <FaInstagram className="h-6 w-6" /> },
    { href: "https://sessionize.com/pratik/", icon: <SiSessionize className="h-6 w-6" /> },
  ];

  return (
    <>
      <Profilephoto />
      <Bio />
      <div className="flex mt-6 space-x-8 justify-center text-4xl">
        {links.map((link) => (
          <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-mycolor">
            {link.icon}
          </Link>
        ))}
      </div>
    </>
  );
}
