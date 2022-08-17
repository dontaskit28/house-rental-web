import { useAuth } from "../context/AuthContext";

export default function profile() {
  const { user } = useAuth();
  if (!user) {
    return <div>You are not logged in</div>;
  }
  return (
    <div className="bg-gray-200 font-sans h-[720px] w-full flex flex-row justify-center items-center">
      <div className="card w-96 mx-auto bg-white shadow-xl hover:shadow">
        <img
          className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
          src="https://avatars.githubusercontent.com/u/67946056?v=4"
          alt="profile"
        />
        <div className="text-center mt-2 text-3xl font-medium">{user.name}</div>
        <div className="text-center mt-2 font-light text-sm">{user.email}</div>
        <div className="px-6 text-center mt-2 font-light text-sm">
          <p>
            Front end Developer, avid reader. Love to take a long walk, swim
          </p>
        </div>
        <hr className="mt-8" />
        <div className="flex p-4">
          <div className="w-1/2 text-center">
            <span className="font-bold">20</span> Friends
          </div>
          <div className="w-0 border border-gray-300"></div>
          <div className="w-1/2 text-center">
            <span className="font-bold">2.0 k</span> Following
          </div>
        </div>
      </div>
    </div>
  );
}
