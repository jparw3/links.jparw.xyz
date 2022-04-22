import data from "../constants/data";

const Bio = ({ children }) => {
  return (
    <h1 className="text-white w-96 text-center text-sm md:text-lg text-gray-200">
      {data.bio}
    </h1>
  );
};

export default Bio;
