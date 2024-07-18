import BarLoader from "react-spinners/BarLoader";

const Spinner = () => {
  return (
    <>
      <BarLoader
        color="#ffc221"
        cssOverride={200}
        height={10}
        speedMultiplier={1}
        width="100%"
        className="mt-5"
      />
    </>
  )
}

export default Spinner;