import React from "react";

const Contact = () => {
  return (
    <div
      className=" container flex flex-col gap-10 py-20 px-5 md:px-8 lg:px-20 lg:h-[100vh] bg-neutral-950 text-white"
      id="contact"
    >
      {" "}
      <div className="title text-center  font-bold text-[25px] md:text-3xl">
        Me <span className="uppercase text-neutral-600">Contacter</span>
      </div>
      <form
        action="#"
        className="flex flex-col items-center justify-center w-full gap-3"
      >
        <div className="input-data grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
          <input
            type="text"
            placeholder="Nom* :"
            className="py-2 pl-3 outline-none bg-neutral-900 rounded-lg md:pl-5 w-full "
          />
          <input
            type="text"
            placeholder="Prénoms* :"
            className="py-2 pl-3 outline-none bg-neutral-900 rounded-lg md:pl-5 w-full "
          />
        </div>
        <div className="input-data grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
          <input
            type="email"
            placeholder="Email* :"
            className="py-2 pl-3 outline-none bg-neutral-900 rounded-lg md:pl-5 w-full "
          />
          <input
            type="text"
            placeholder="Téléphon* : +225 05 85 58 98 12"
            className="py-2 pl-3 outline-none bg-neutral-900 rounded-lg md:pl-5 w-full "
          />
        </div>
        <div className="input-data w-full">
          <textarea
            placeholder="Votre message* :"
            className="py-2 pl-3 outline-none bg-neutral-900 rounded-lg md:pl-5 w-full  h-[200px]"
          ></textarea>
        </div>

        <div className="down flex items-center justify-center ">
          <button
            type="submit"
            className="font-bold text-white w-max bg-neutral-600 rounded-full py-2 px-4  hover:bg-neutral-500 hover:shadow-lg hover:shadow-neutral-600 duration-200"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
