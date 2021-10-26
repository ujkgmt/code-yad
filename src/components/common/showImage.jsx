
import React from "react";
import {Img} from "react-image";
import RiseLoader  from "react-spinners/RiseLoader";
const ShowImage = ({ image, styles }) => {
  
  return (
    <Img
      src={image}
      style={ styles}
      loader={
        <div className="text-center mx-auto">
          <RiseLoader

            color={"#733dd8"}
            loading={true}
            size={15}
            margin={5}
            css={styles}
           
           
          />
        </div>
      }
    />
  );
};

export default ShowImage;
