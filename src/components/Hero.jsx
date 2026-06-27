import {
  Bell,
  Calendar,
  Home,
  Play,
  Settings,
  User,
  Users,
  Folders,
  ChartColumn,
  ClipboardList,
} from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-6 sm:pt-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 lg:pt-15 items-center relative">
          <div className="max-w-[450px]">
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
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          <div className="relative order-2 w-full">
            <div className="relative bg-white/5 backdrop-xl rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-2xl border border/10 flex gap-2">
              <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:w-[170px] lg:h-[460px]">
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                  <div className="flex items-center space-x-1 group cursor-pointer">
                    <div className="">
                      <img
                        src="/images/NexoraBG.png"
                        alt="logoForNoxera"
                        className="w-6 h-6 sm:w-8 sm:h-6"
                      />
                    </div>
                    <span className="text-lg sm:textxl md:text-2xl font-medium">
                      <span className="text-white"> Nexora</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-2 text-white/60 ">
                  <div className="flex items-center gap-2 p-3 rounded-lg backdrop-blur-lg hover:bg-blue-200/10 border border-white/10">
                    <Home className="w-4 h-4" />
                    <p>Dashboard</p>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg backdrop-blur-lg hover:bg-blue-200/10 border border-white/10">
                    <Folders className="w-4 h-4" />
                    <p>Projects</p>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg backdrop-blur-lg hover:bg-blue-200/10 border border-white/10">
                    <ClipboardList className="w-4 h-4" />
                    <p>Tasks</p>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg backdrop-blur-lg hover:bg-blue-200/10 border border-white/10">
                    <Users className="w-4 h-4" />
                    <p>Teams</p>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg backdrop-blur-lg hover:bg-blue-200/10 border border-white/10">
                    <ChartColumn className="w-4 h-4" />
                    <p>Reports</p>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg backdrop-blur-lg hover:bg-blue-200/10 border border-white/10">
                    <Calendar className="w-4 h-4" />
                    <p>Calander</p>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg backdrop-blur-lg hover:bg-blue-200/10 border border-white/10">
                    <Settings className="w-4 h-4" />
                    <p>Setting</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] w-full lg:h-[450px]">
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                  <span className="text-lg sm:textxl md:text-2xl font-medium">
                    Dashboard
                  </span>
                  <div className="flex gap-2 items-center text-white/60">
                    <Bell className="w-4 h-4" />
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/20">
                      <User />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 p-2 text-white/60  mx-auto">
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg backdrop-blur-lg hover:bg-blue-200/10 border border-white/10 ">
                    <p>Total Projects</p>
                    <h1 className="text-white font-semibold">24</h1>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg backdrop-blur-lg hover:bg-blue-200/10 border border-white/10">
                    <p> Tasks Completed</p>
                    <h1 className="text-white font-semibold">128</h1>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg backdrop-blur-lg hover:bg-blue-200/10 border border-white/10">
                    <p>Team Members</p>
                    <h1 className="text-white font-semibold">12</h1>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg backdrop-blur-lg hover:bg-blue-200/10 border border-white/10">
                    <p>Productivity</p>
                    <h1 className="text-white font-semibold">87%</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-8xl mx-auto mt-4 text-center relative w-full">
          <div className="max-w-8xl mx-auto flex flex-col text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative p-4">
            <div className="inline-flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 rounded-full">
              <span className="text-blue-300 font-bold pr-2 pl-2 rounded-lg">
                FEATURES
              </span>
            </div>
            <h3 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
              <span>Everything you need, in one place</span>
            </h3>
            <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Powerfull features to help you and your team stay organized and
              productive.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 ">
          <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden ">
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm">
              <div className="flex gap-2 items-center text-white/60">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/20">
                  <img
                    src="/images/projects.png"
                    alt="projects"
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 p-2 text-white/60  mx-auto">
              <div className="flex flex-col items-center gap-2 p-3 rounded-lg backdrop-blur-lg hover:bg-blue-200/10 ">
                <h1 className="text-white font-semibold">Project Management</h1>
                <p>
                  Organize projects ,set deadlines and track progress
                  effortlessly
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden ">
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm ">
              <div className="flex gap-2 items-center text-white/60">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/20">
                  <img
                    src="/images/tasks.png"
                    alt="task"
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 p-2 text-white/60  mx-auto">
              <div className="flex flex-col items-center gap-2 p-3 rounded-lg backdrop-blur-lg hover:bg-blue-200/10  ">
                <h1 className="text-white font-semibold">Task Tracking</h1>
                <p>Creat tasks, assign team members, and get thing done.</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden ">
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm ">
              <div className="flex gap-2 items-center text-white/60">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/20">
                  <img
                    src="/images/teams.png"
                    alt="teams"
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 p-2 text-white/60  mx-auto">
              <div className="flex flex-col items-center gap-2 p-3 rounded-lg backdrop-blur-lg hover:bg-blue-200/10  ">
                <h1 className="text-white font-semibold">Team Collaboration</h1>
                <p>Work together in real-time and keep everyone in the loop.</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden ">
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm ">
              <div className="flex gap-2 items-center text-white/60">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/20">
                  <img
                    src="/images/analytics.png"
                    alt="analytics"
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 p-2 text-white/60  mx-auto">
              <div className="flex flex-col items-center gap-2 p-3 rounded-lg backdrop-blur-lg hover:bg-blue-200/10">
                <h1 className="text-white font-semibold">
                  Analytics & Reports
                </h1>
                <p>
                  Get insights and make better descisions with smart analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
