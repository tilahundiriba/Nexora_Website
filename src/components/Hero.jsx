import { Play } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative w-full">
        <div className="max-w-7xl mx-auto flex flex-collg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 rounded-full mb-4 sm:mb-6">
              <span className="text-blue-300 font-bold bg-blue-400/20 pr-2 pl-2 rounded-full">
                NEW
              </span>
              <span className="text-white/80 text-xs sm:text-sm">
                Bulid faster. Launch sooner.
              </span>
            </div>
            <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6">
              <span className="block">Builud. Simplify.</span>
              <span>
                {" "}
                Grow with <span className="text-blue-400">Nexora</span>
              </span>
            </h1>
            <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed">
              Nexora helps you manage your projects,tasks,and team in one
              beautiful and simple workspace.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start">
              <button className="group w-full sm:w-auto px-6 m-2 sm:px-8 py-4 sm:py-4 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base hover:scale-102 flex items-center justify-center space-x-2">
                <span>Get Started Free</span>
              </button>
              <button className="group w-full sm:w-auto px-6 m-2 sm:px-8 py-2 mt-4 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base hover:bg-white/10 flex items-center justify-center space-x-2">
                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white"/>
                </div>
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
