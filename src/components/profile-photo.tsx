import getUser from "@/server/get-user";
import Image from "next/image";

export default async function Profilephoto() {
  const bio = await getUser();

  return (
    <div className="flex justify-center content-center">
      <Image className="rounded-full" width={150} height={150} src={bio.profilePicture ?? ""} alt={"Pratik Kale Profile"} />
    </div>
  );
}
