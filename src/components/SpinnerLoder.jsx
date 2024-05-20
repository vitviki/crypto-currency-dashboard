import spinner from "../assets/spinner.svg";

const SpinnerLoder = ({ size }) => {
  return (
    <div>
      <img src={spinner} alt="spinner loader" width={size} />
    </div>
  );
};

export default SpinnerLoder;
