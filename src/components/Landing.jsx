import React from "react";

function Landing() {
  return (
    <div className="w-full  bg-#F1F1F1 pt-1 ">
      <div className="w-full flex justify-center items-top mt-[6vw] ">
        <input
          type="text"
          placeholder="Search"
          className="border-2 w-[35vw] rounded-[1vw] py-2 px-3 mt-[2vw] border-black"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="textstructure mt-[6vw] px-20">
          {[
            "Delicious Cuisine",
            "Warm Atmosphere",
            "Memorable Experiences",
          ].map((item, index) => {
            return (
              <div className="masker">
                <div className="w-fit flex items-center">
                  {index === 1 && (
                    <div className="w-[10vw] h-[9vw] py-[1vw] rounded-full"><img
                      src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    /></div>
                  )}
                  <div className='text-[4vw] uppercase leading-[6.5vw] tracking-tighter font-["Avenir_Next"] font-semibold'>
                    <h1>{item}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" w-[18vw] mr-[6vw]">
          <img
            src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Your Image Description"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
