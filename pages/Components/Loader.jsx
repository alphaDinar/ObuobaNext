import { useLoader } from "../_app";

const Loader = () => {
  
  const { loader } = useLoader();

  return (
    <section
      style={loader ? { display: "flex" } : { display: "none" }}
      className="loader"
    >
      <div>
        <small></small>
        <small></small>
        <small></small>
      </div>
    </section>
  );
};

export default Loader;
