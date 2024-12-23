"use client";

import React from "react";

import { collaborativeTool, companiesBack, companiesFront, dataBase, operatingSys, testing } from "@/data";

const Clients = () => {
  return (
    <section id="tech" className="py-20">
      <h1 className="heading mb-20">
        Technical
        <span className="text-purple"> Skills</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <h3 className="text-xl mb-10">
          <span className="text-purple">BACK </span> END
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companiesBack.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
        <h3 className="text-xl m-10">
          <span className="text-purple">FRONT </span> END
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companiesFront.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
        <h3 className="text-xl m-10">
          <span className="text-purple">Data</span>Base
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {dataBase.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
        <h3 className="text-xl m-10">
          <span className="text-purple">Test</span>ing
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {testing.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
        <h3 className="text-xl m-10">
          <span className="text-purple">Collaborative</span> Tools
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {collaborativeTool.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
        <h3 className="text-xl m-10">
          <span className="text-purple">Operating</span> System
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {operatingSys.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
