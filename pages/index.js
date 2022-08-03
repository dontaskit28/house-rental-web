import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-purple-100">
    <div className="h-screen w-11/12 flex m-auto justify-center items-center">
      <section className="h-full max-h-[640px]">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
            <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
              <span className="text-violet-700">Rent</span> Your Dream House
              With Us.
            </h1>
            <p className="max-w-[480px] mb-8">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>
            <div className="flex justify-evenly w-72 mt-10">
              <Link href="/uploadHouse">
                <button className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                  Owner
                </button>
              </Link>
              <Link href="/house">
                <button className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                  Customer
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden flex-1 lg:flex justify-end items-end">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/rentalweb-ed0e7.appspot.com/o/house-banner.png?alt=media&token=385cde86-f09c-4f08-986c-122131c93c76"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Banner;
