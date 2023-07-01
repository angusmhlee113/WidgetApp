import { useEffect, useState } from "react";
import axios from "axios";

const MedicalDiction = () => {
  const [medicalDictions, setMedicalDictions] = useState([]);

  const requestword = async () => {
    try {
      const data = await axios.get(
        `https://dictionaryapi.com/api/v3/references/medical/json/test?key=a743a27b-3e0d-40bf-a714-f2f9d069a7e7`
      );
      console.log(data.data[0].meta.id);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    requestword();
    console.log(JSON.stringify(medicalDictions));
  }, []);

  return (
    <div>
      <h1 className="text-gray-500">Medical Dictionary</h1>
      <div className="flex flex-col">
        {/* {medicalDictions.map((medicalDiction) => (
          <div>{medicalDiction.meta.id}</div>
        ))} */}
      </div>
    </div>
  );
};

export default MedicalDiction;
