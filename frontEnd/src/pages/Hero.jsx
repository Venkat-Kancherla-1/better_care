import doctors from '../assets/images/doctors.jpg'
const Hero = () => {
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-between pr-10 pl-10 min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col  items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat font-bold '>
        Welcome User! 
        </p>
        <span>Hope You are Doing Great!</span>
        <div>
            <div id="form-check" className='mx-2 my-2 gap-2'>
                <input className="w-5 h-5" type="checkbox" defaultChecked={false} id='task-1'  />
                <label className=" px-1 py-1 text-xl" >Meditation</label>
            </div>
            <div className='mx-2 my-2'>
                <input className="w-5 h-5" type="checkbox" id='task-2' defaultChecked={false} />
                <label className=" px-1 py-1 text-xl" >Exercise</label>
            </div>
        </div>
      </div>
      <div className='mt-10'>
      <img src={doctors} alt="" className='rounded-xl' height={50} width={400}/>
      </div>
    </section>
  );
};

export default Hero;