import Hero_bg from "../assets/images/Hero_bg.png";

const Hero = () => {
  const username = localStorage.getItem("username");

  return (
    <section
      id="home"
      className="w-full flex flex-col lg:flex-row justify-between pr-10 pl-10 gap-10"
    >
      <div className="relative lg:w-2/5 flex flex-col items-start w-full pt-10 lg:pt-20 lg:ml-60 lg:mt-12">
        <p className="text-3xl lg:text-7xl  font-bold leading-tight pl-20">
          Welcome <span className="text-teal-600 ">{username}!</span>
        </p>
        <span className="text-base lg:text-3xl text-gray-600 pl-5">
          Hope you are doing great!
        </span>
        <div className="mt-4 lg:mt-6 lg:ml-10 text-lg text-gray-700 flex items-center justify-center">
          <span className="font-custom">
            Tell us about Your Accomplishments
          </span>
        </div>
        <div
          id="user_tasks"
          className="mt-4 lg:mt-6 lg:ml-10 flex flex-col lg:flex-row gap-4"
        >
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
            <input
              className="w-5 h-5 mr-2"
              type="checkbox"
              defaultChecked={false}
              id="task-1"
            />
            <label className="text-base lg:text-lg" htmlFor="task-1">
              Meditation
            </label>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
            <input
              className="w-5 h-5 mr-2"
              type="checkbox"
              id="task-2"
              defaultChecked={false}
            />
            <label className="text-base lg:text-lg" htmlFor="task-2">
              Exercise
            </label>
          </div>
        </div>
      </div>

      <div className="mt-4 lg:mt-0">
        <img src={Hero_bg} alt="" className="rounded-xl w-full lg:max-w-xl" />
      </div>
    </section>
  );
};

export default Hero;
