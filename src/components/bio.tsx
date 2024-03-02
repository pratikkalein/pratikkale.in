import Link from "next/link";

export default async function bio() {
  return (
    <div className="mt-3">
      <p className="text-center">
        Hi there 👋, I am <b>Pratik Kale</b> Developer and Community Evangelist <br /> Public Speaker & Organizer at{" "}
        <Link className="underline decoration-mycolor hover:text-mycolor decoration-2" href="https://gdgcloudpune.com" target="_blank">
          GDG Cloud Pune
        </Link>
      </p>
    </div>
  );
}
