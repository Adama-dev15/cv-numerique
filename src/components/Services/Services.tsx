import React from "react";
import { FaDatabase, FaMobileAlt } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";

const Services = () => {
  return (
    <div
      className=" container px-5 md:px-8 lg:px-20 lg:h-[100vh] bg-neutral-950 text-white py-10  lg:py-20"
      id="services"
    >
      <div className="content flex flex-col items-center justify-center gap-5">
        <div className="title text-center md:text-left font-bold text-[25px] md:text-3xl">
          Mes
          <span className="uppercase text-neutral-600"> services</span>
        </div>

        <div className="services grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* card  */}
          <div className="card-service group cursor-pointer  flex flex-col items-center justify-center gap-2 md:py-6 md:px-7 py-3 px-4 bg-neutral-900 rounded-md hover:border hover:border-white  duration-300 ">
            <div className="icon">
              <IoCodeSlashSharp
                size={50}
                className="text-neutral-600 group-hover:text-white duration-300"
              />
            </div>
            <div className="name font-bold text-[23px] lg:text-[30px]">
              <h2>Font End</h2>
            </div>
            <div className="text">
              <p className="text-center">
                Explorez mon travail en développement FrontEnd : des interfaces
                utilisateur élégantes et des expériences web interactives qui
                captivent les visiteurs dès le premier regard.
              </p>
            </div>
          </div>
          {/* card  end*/}

          {/* card  */}
          <div className="card-service cursor-pointer group flex flex-col items-center justify-center gap-2 md:py-6 md:px-7 py-3 px-4 bg-neutral-900 rounded-md hover:border hover:border-white  duration-300 ">
            <div className="icon">
              <FaDatabase
                size={50}
                className="text-neutral-600 group-hover:text-white duration-300"
              />
            </div>
            <div className="name font-bold text-[23px] lg:text-[30px]">
              <h2>Back End</h2>
            </div>
            <div className="text">
              <p className="text-center">
                Explorez mes compétences en développement BackEnd : des
                solutions robustes et sécurisées qui alimentent les
                fonctionnalités de vos applications web.
              </p>
            </div>
          </div>
          {/* card  end*/}

          {/* card  */}
          <div className="card-service group cursor-pointer flex flex-col items-center justify-center gap-2 md:py-6 md:px-7 py-3 px-4 bg-neutral-900 rounded-md hover:border hover:border-white  duration-300 ">
            <div className="icon">
              <FaMobileAlt
                size={50}
                className="text-neutral-600 group-hover:text-white duration-300"
              />
            </div>
            <div className="name font-bold text-[23px] lg:text-[30px]">
              <h2>Application Mobile</h2>
            </div>
            <div className="text">
              <p className="text-center">
                Explorez mon savoir-faire en développement d&apos;applications :
                des solutions mobiles innovantes et conviviales conçues pour
                répondre aux besoins de vos utilisateurs.
              </p>
            </div>
          </div>
          {/* card  end*/}
        </div>
      </div>
    </div>
  );
};

export default Services;
