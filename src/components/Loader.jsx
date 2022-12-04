import React from "react";
import { Puff } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full h-[90vh] flex justify-center items-center mt-4">
      <Puff
        height="80"
        width="80"
        radisu={1}
        color="deeppink"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
