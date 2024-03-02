import Link from "next/link";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mb-8 mt-12 flex flex-col items-center justify-center text-sm leading-snug text-muted-foreground">
      <span className="text-center">
        &copy; {year} Pratik Kale •{" "}
        <Link href="https://pratikkale.in" target="_blank" rel="noreferrer" className="underline hover:text-mycolor">
          pratikkale.in
        </Link>
        &nbsp; All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
