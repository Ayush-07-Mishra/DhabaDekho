import React from "react";

function About() {
  return (
    <div className="w-full py-[8vw] px-[6vw] bg-[#CDEA68] rounded-tr-3xl rounded-tl-3xl ">
      <h1 className="Neue Montreal text-[3vw] leading-[4vw]">
        At <b> DhabaDekho</b>, we understand that choosing where to eat can
        sometimes be a daunting task. That's why we've created a user-friendly
        platform that simplifies the process of finding great dining options
        nearby.
      </h1>
      <div className="w-full border-t-[2px] border-[#7f8e41] mt-[6vw] flex py-[1.5vw]">
        <div className="w-1/3 text-[1.5vw]">
          <h1>What you can expect:</h1>
        </div>
        <div className="w-2/3 flex justify-between ">
          <div className="w-1/2">
            <div>
              <p className="text-[1.4vw]">
                Location-Based Recommendations: Our app automatically detects
                your location and suggests nearby restaurants, ensuring you
                never have to travel far for a memorable meal.
              </p>
              <br />
            </div>
            <div className="text-[1.4vw]">
              <p>
                Personalized Preferences: Tell us your culinary preferences,
                dietary restrictions, and budget, and we'll provide you with
                restaurant recommendations that match your criteria.
              </p>
            </div>
          </div>
          <div className="w-1/2 ml-[15vw] text-[1.5vw]">
            <h1 className="p-10">S:</h1>
            <br />
            <a className="p-10">instagram</a>
            <br />
            <a className="p-10">facebook</a>
            <br />
            <a className="p-10">Linkedin</a>
            <br />
          </div>
        </div>
      </div>
      <div className="mt-20vw">
        <div className="w-full border-t-[2px] border-[#7f8e41] mt-[6vw]  py-[1.5vw] flex justify-between">
          <div>
            <h1 className="text-[4vw]">Our approach:</h1>
            <div className="w-[15vw] flex items-center mt-8 px-[2vw] py-[1vw] text-[1.3vw] text-white bg-[#20260b] border-2 border-[#7f8e41] rounded-full gap-8 ">
              <button className="uppercase">read more</button>
              <span className="rotate-[45deg]"></span>
            </div>
          </div>
          <div className="h-[35vw] w-1/2 bg-[#738b13] bg-cover rounded-2xl overflow-hidden">
            <img className="bg-cover w-[100%] h-[35vw]" src="https://images.unsplash.com/photo-1496699535844-f0c813511f39?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1496699535844-f0c813511f39?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
