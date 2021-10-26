import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { claerUser } from "../../actions/user";

// import  HashLoader  from 'react-spinners/HashLoader';

const Logout = () => {
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem("token");
    dispatch(claerUser());
    window.location.reload(false);
  }, []);
  // const styled = {
  //     display: "block",
  //     margin: "17rem 20rem",
  //   };
  return (
    <div>
      {/*         
   <HashLoader
          color={"#733dd8"}
          loading={true}
          size={100}
          css={styled}
        />
            */}
    </div>
  );
};

export default Logout;
