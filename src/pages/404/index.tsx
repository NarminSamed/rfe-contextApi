import Lottie from "lottie-react";
import animationData from "../../assets/animation/Animation - 1722413193309.json";

const Error = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <Lottie
        animationData={animationData}
        loop={true}
        style={{ width: 300, height: 300, margin: "auto" }}
      />
      <h1>Oops! Something went wrong.</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default Error;
