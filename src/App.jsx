import React,{useState} from 'react';
function App() {

  const [price, setPrice] = useState(false);

  function handelOnclick(){
    setPrice(previous => !previous);
  }
  return (
    <>
      <section className="relative min-h-screen max-h-full after:absolute after:w-1/2 lg:after:h-[15rem] xl:after:h-[20rem] after:h-[7rem] after:-bottom-2 after:-translate-x-2  after:left-0 after:bg-[url('/src/assets/bg-bottom.svg')] after:bg-no-repeat after:bg-contain after:z-0 overflow-hidden before:absolute before:w-1/3 before:right-0 before:translate-x-16 before:h-full before:bg-[url('/src/assets/bg-top.svg')] before:bg-no-repeat before:bg-contain before:top-0 xl:before:h-[41rem] xl:before:translate-x-40 2xl:before:translate-x-80 before:z-0">
        <header className="flex justify-center items-center flex-col gap-10 pt-16 xl:gap-16">
          <h1 className="text-3xl font-bold text-gray-500 xl:text-4xl">Our Pricing</h1>
          <div className="flex justify-center items-center gap-10">
            <span className="font-medium text-lg text-gray-500 xl:text-xl">Annually</span>
            <div>
              <label className="text-[17px] relative inline-block w-[62px] h-[35px]">
                <input type="checkbox" className="opacity-100 w-0 h-0 peer" onClick={(event)=> handelOnclick(event.target.checked)}/>
                <span className="absolute cursor-pointer top-0 left-0 bottom-0 right-0 bg-indigo-500 transition-all duration-[0.4s] rounded-[30px] border border-[#ccc] before:absolute before:content-[''] before:h-[1.9em] before:w-[1.9em] before:rounded-[16px] bofore:left-[1.2px] before:top-0 before:bottom-0 before:bg-white before:shadow-md before:shadow-[#999999] before:transition-all before:duration-[.4s] peer-checked:bg-indigo-200 peer-checked:border-transparent peer-checked:before:translate-x-[1.5em]"></span>
              </label>
            </div>
            <span className="font-medium text-gray-500 text-lg xl:text-xl">Monthly</span>
          </div>
        </header>

        <main className="my-10 flex flex-col justify-center items-center gap-10 md:px-44 lg:flex-row lg:px-10 lg:gap-0 xl:mt-16 xl:px-36 2xl:px-64">
          <div className="flex flex-col justify-center items-center gap-5 border-[0.5px] bg-white relative z-50 w-[90%] mx-auto p-10 text-center  rounded-lg shadow-lg shadow-indigo-200 lg:rounded-r-none lg:border-r-0">
            <h2 className="font-medium text-gray-600 lg:text-xl">Basic</h2>
            <h3 className="text-[2.5rem] text-gray-600 font-bold flex justify-center items-center gap-1 xl:text-[3rem]">
              <span className="text-[1.5rem] xl:text-[1.9rem]">$</span>{price ? '19.99' : '199.99'}
            </h3>
            <ul className="flex flex-col gap-2 border-t py-3 *:border-b *:pb-2 w-full text-indigo-900/70 font-semibold xl:gap-5 *:xl:pb-5 xl:py-5">
              <li>500 GB Storage</li>
              <li>2 Users Allowed</li>
              <li>Send up to 3 GB</li>
            </ul>
            <button className="uppercase font-semibold bg-gradient-to-r from-indigo-300 to-indigo-500/90 text-gray-50 w-full py-2 rounded-md border border-transparent hover:border-indigo-500 hover:text-indigo-500/80 hover:from-gray-50  hover:to-gray-50  transition-all duration-500 ease-in-out xl:text-lg">
              Learn More
            </button>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 bg-gradient-to-br from-indigo-300 to-indigo-500/90 relative z-50 w-[90%] mx-auto p-10 text-center  rounded-lg shadow-lg shadow-indigo-200 text-gray-50 overflow-hidden lg:py-14 xl:py-16">
            <h2 className="font-medium lg:text-xl">Professional</h2>
            <h3 className="text-[2.5rem] font-bold flex justify-center items-center gap-1 xl:text-[3rem]">
              <span className="text-[1.5rem] xl:text-[1.9rem]">$</span>{price ? '24.99' : '249.99'}
            </h3>
            <ul className="flex flex-col gap-2 border-t py-3 *:border-b *:pb-2 w-full font-semibold xl:gap-5 *:xl:pb-5 xl:py-5">
              <li>1 TB Storage</li>
              <li>5 Users Allowed</li>
              <li>Send up to 10 GB</li>
            </ul>
            <button className="uppercase font-semibold bg-gray-50 text-indigo-500/90 w-full py-2 rounded-md border border-transparent hover:text-gray-50 hover:bg-transparent hover:border-gray-50 transition-all duration-300 ease-in-out">
              Learn More
            </button>
          </div>

          <div className="flex flex-col justify-center items-center border-[0.5px] gap-5 bg-white relative z-50 w-[90%] mx-auto p-10 text-center  rounded-lg shadow-lg shadow-indigo-200 lg:rounded-l-none">
            <h2 className="font-medium text-gray-600 lg:text-xl">Master</h2>
            <h3 className="text-[2.5rem] text-gray-600 font-bold flex justify-center items-center gap-2 xl:text-[3rem]">
              <span className="text-[1.5rem] xl:text-[1.9rem]">$</span>{price ? '39.99' : '399.99'}
            </h3>
            <ul className="flex flex-col gap-2 border-t py-3 *:border-b *:pb-2 w-full text-indigo-900/70 font-semibold xl:gap-5 *:xl:pb-5 xl:py-5">
              <li>2 TB Storage</li>
              <li>10 Users Allowed</li>
              <li>Send up to 20 GB</li>
            </ul>
            <button className="uppercase font-semibold bg-gradient-to-r from-indigo-300 to-indigo-500/90 text-gray-50 w-full py-2 rounded-md border border-transparent hover:border-indigo-500 hover:text-indigo-500/80 hover:bg-gradient-to-b hover:from-gray-50 hover:to-gray-50   transition-all duration-300 ease-in-out xl:text-lg">
              Learn More
            </button>
          </div>
        </main>
      </section>
    </>
  );
}

export default App;
