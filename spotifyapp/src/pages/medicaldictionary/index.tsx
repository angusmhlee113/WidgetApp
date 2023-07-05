import MedicalDiction from "~/components/medicaldictionary/medicaldiction";
import { useState, useEffect } from "react";
import { set } from "zod";
const MedicalDictionary = () => {
  const [medicalDictions, setMedicalDictions] = useState("");

  const onChangeHandler = (e: any) => {
    setMedicalDictions(e.target.value);
  };

  const onClickHandler = async () => {
    try {
      const data = await fetch(
        `${window.location.origin}/api/dictionaryresult?word=${medicalDictions}`
      );
      const json = await data.json();
      console.log(json);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1 className="text-gray-500">Medical Dictionary</h1>
      <div className="flex flex-col ">
        <input
          id={"search"}
          className="button_password mb-2 w-2/3 grow-[2] rounded-xl border-black p-2 outline-black drop-shadow-lg"
          onChange={onChangeHandler}
        />
        <button
          className="w-1/3 rounded-xl border-black outline-black"
          onClick={onClickHandler}
        >
          Search
        </button>
      </div>
      <p>{medicalDictions}</p>
    </div>
  );
};

export default MedicalDictionary;
