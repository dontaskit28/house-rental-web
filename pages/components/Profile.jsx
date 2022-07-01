import Image from "next/image";
import profile from "../../public/a.jpg";

export default function Profile() {
  return (
    <div className="flex justify-center mt-10">
      <div className="sm:w-2/3 md:w-1/2 w-full border-2 rounded-lg h-96 p-2">
        <div className="flex justify-between p-4">
          <Image
            className="rounded-full"
            alt="profile"
            height={200}
            width={200}
            src={profile}
          />
          <div className="flex flex-col ">
            <div className="text-3xl font-bold">Your Name</div>
            <div>Your Email</div>
          </div>
        </div>
      </div>
    </div>
  );
}
