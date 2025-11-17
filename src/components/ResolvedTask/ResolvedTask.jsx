import React from "react";

const ResolvedTask = ({resData}) => {
  return (
    <div className="py-5 px-4 mb-3 bg-[#E0E7FF] rounded-sm shadow-lg">
      <p className="font-medium text-lg text-[#001931]">
        {resData.title}
      </p>
    </div>
  );
};

export default ResolvedTask;
