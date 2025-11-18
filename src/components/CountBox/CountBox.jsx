import React from "react";
import Container from "../Container/Container";
import bg1 from "../../assets/vector1.png";
import bg2 from "../../assets/vector2.png";

const CountBox = ({ selected, resolvedData }) => {

  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-10 md:py-20 px-4 md:px-0">
        <div className="flex-1 rounded-lg p-10 text-white h-full w-full md:h-[250px] bg-linear-to-r from-[#632EE3] to-[#9F62F2] flex flex-col justify-center items-center relative">
          <img className="absolute left-0 top-0" src={bg1} alt="" />
          <img className="absolute right-0 top-0" src={bg2} alt="" />
          <h2 className="text-2xl">In-Progress</h2>
          <p className="font-semibold text-6xl">{selected.length}</p>
        </div>
        <div className=" flex-1 rounded-lg p-10 text-white h-full w-full md:h-[250px] bg-linear-to-r from-[#54CF68] to-[#00827A] flex flex-col justify-center items-center relative">
          <img className="absolute left-0 top-0" src={bg1} alt="" />
          <img className="absolute right-0 top-0" src={bg2} alt="" />
          <h2 className="text-2xl">Resolved</h2>
          <p className="font-semibold text-6xl">{resolvedData.length}</p>
        </div>
      </div>
    </Container>
  );
};

export default CountBox;
