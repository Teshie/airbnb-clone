import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative lg:h-[500px] xl:h-[600px] 2xl:h-[700px] h-[300px] sm:h-[400px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg font-bold">
          Not sure where to go? Perfect.
        </p>
        <button className="text-purple-500 my-3 hover:shadow-xl bg-white px-10 font-bold py-4 shadow-md rounded-full active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
