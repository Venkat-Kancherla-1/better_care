// import doctors from '../assets/images/doctors.jpg'
import Hero_bg from '../assets/images/Hero_bg.jpg'

const Hero = () => {
  return (
    <section
      id='home'
      className='w-full flex flex-col lg:flex-row justify-between pr-10 pl-10 gap-10'
    >
      <div className='relative lg:w-2/5 flex flex-col items-start w-full pt-10 lg:pt-20'>
        <p className='text-3xl lg:text-6xl font-montserrat font-bold '>
          Welcome <span className='text-blue-500'>User!</span>
        </p>
        <span className='text-base lg:text-lg text-gray-600 '>Hope you are doing great!</span>
        <div id='user_tasks' className='mt-6'>
          <div className='flex items-center gap-2'>
            <input className="w-5 h-5" type="checkbox" defaultChecked={false} id='task-1'  />
            <label className="text-base lg:text-lg" >Meditation</label>
          </div>
          <div className='flex items-center gap-2 mt-1'>
            <input className="w-5 h-5" type="checkbox" id='task-2' defaultChecked={false} />
            <label className="text-base lg:text-lg" >Exercise</label>
          </div>
        </div>
      </div>
      <div className='mt-10 lg:mt-0'>
        <img src={Hero_bg} alt="" className='rounded-xl w-full lg:w-auto mt-3'/>
      </div>
    </section>
  );
};

export default Hero;
