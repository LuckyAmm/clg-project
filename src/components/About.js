import React from "react";
import clgPic from "../images/gmr.jpg";
import principal from "../images/principal.jpeg";

export default function About() {
  return (
    <div className="pt-20 ">
      <h2 className="text-center text-2xl font-bold">
        <span className="text-red-600 border-b-4 border-gray-900 mr-3">
          ABOUT
        </span>
        <span className="text-gray-900 border-b-4 border-red-600">
          COLLLEGE
        </span>
      </h2>
      <div className="mx-4 my-6 bg-white min-h-fit">
        <div className=" bg-white w-full p-4">
          <h2 className="text-center md:text-xl underline font-semibold">
            Dr. B.R.Ambedkar Government Model Residential Polytechnic, Bommuru{" "}
          </h2>
          <img
            src={clgPic}
            alt="College"
            className="md:w-96 object-cover object-center mx-auto my-3 shadow-md rounded-xl select-none"
          />
          <p className="md:px-8 text-gray-600 text-justify md:text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            totam itaque voluptate odio molestiae? Nostrum soluta dicta nesciunt
            nemo pariatur quibusdam consectetur, officiis aspernatur numquam,
            praesentium ex earum itaque animi Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Dolore exercitationem culpa iure id
            quasi fugiat incidunt obcaecati distinctio? Et, iusto ratione. A,
            consectetur voluptates atque repudiandae esse similique neque
            assumenda..
          </p>
          <div className="w-full my-16">
            <h2 className="dividerStyle mb-6">Facilities</h2>
            <div className=" flex w-full items-center justify-center gap-16 font-serif flex-wrap">
              <div className="bg-blue-300 w-44 h-44 relative cursor-default">
                <img
                  src={principal}
                  alt=""
                  className="w-44 h-44 object-cover object-center peer"
                />
                <div className="opacity-0 peer-hover:opacity-100 absolute top-0 w-44 h-44 hover:opacity-100 bg-gray-100 transition-all duration-300 border-4 flex items-center justify-center select-none bg-opacity-80">
                  Free Hostel
                </div>
              </div>
              <div className="bg-blue-300 w-44 h-44 relative cursor-default">
                <img
                  src={principal}
                  alt=""
                  className="w-44 h-44 object-cover object-center peer"
                />
                <div className="opacity-0 peer-hover:opacity-100 absolute top-0 w-44 h-44 hover:opacity-100 bg-gray-100 transition-all duration-300 border-4 flex items-center justify-center select-none bg-opacity-80">
                  Laboratories
                </div>
              </div>
              <div className="bg-blue-300 w-44 h-44 relative cursor-default">
                <img
                  src={principal}
                  alt=""
                  className="w-44 h-44 object-cover object-center peer"
                />
                <div className="opacity-0 peer-hover:opacity-100 absolute top-0 w-44 h-44 hover:opacity-100 bg-gray-100 transition-all duration-300 border-4 flex items-center justify-center select-none bg-opacity-80">
                  Free Hostel
                </div>
              </div>
            </div>
            <div className="bg-gray-50 py-8 my-16 w-full md:w-[80%] mx-auto rounded-2xl shadow-lg ">
              <h2 className="font-bold text-center md:dividerStyle text-sm md:text-2xl mb-4 underline underline-offset-2 ">
                Principal Message
              </h2>
              <div className="h-fit mb-8 px-4  flex flex-col text-center items-center justify-center gap-4 md:gap-12 md:flex-row md:text-left">
                <img
                  src={principal}
                  alt="Principal Pic"
                  className="rounded-xl border-2 border-black relative top-1 w-36 float-left mr-3 h-fit select-none "
                  draggable={false}
                />
                <div className="w-full lg:w-1/2 ">
                  <h4 className="font-semibold">Dear Students / Parents,</h4>
                  <p className="mb-1 text-gray-800 text-sm md:text-base">
                    We firmly believe that the parents are their child's first
                    and most important teacher. Parents play a vital role in the
                    education of their children. We happily welcome all our
                    parents to take an active role in the education of their
                    children and to be the active participants in our school
                    life.
                  </p>
                  <div className="md:ml-16">--- X --- </div>
                </div>
              </div>
            </div>
          </div>

          <div className="location">
            <h2 className="dividerStyle">College Address</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816.315933927806!2d81.8032883143961!3d16.959003019483273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a33e0dd240ab%3A0xf1ae06dc3af98447!2sEce%20Block%20Dr.Bra%20Gmr%20Polytechnic!5e0!3m2!1sen!2sin!4v1676184094915!5m2!1sen!2sin&output=embed"
              className="mx-auto my-6 w-full h-[450px] md:max-w-xl"
              title="College Address"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="info my-16">
            <h2 className="dividerStyle">College Info</h2>
            <div className="contact flex flex-col items-center justify-center">
              <div>
                <span className="text-gray-900 font-semibold text-lg">
                  Email :{" "}
                </span>
                <span className="text-gray-600">exmapleemail@gmail.com</span>
              </div>
              <div>
                <span className="text-gray-900 font-semibold text-lg">
                  College Office Mobile Number :{" "}
                </span>
                <span className="text-gray-600">6547895216</span>
              </div>
              <div>
                <span className="text-gray-900 font-semibold text-lg">
                  Alternative Mobile Number :{" "}
                </span>
                <span className="text-gray-600">7894561234</span>
              </div>
              <div>
                <span className="text-gray-900 font-semibold text-lg">
                  College Code :{" "}
                </span>
                <span className="text-gray-600">072</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
