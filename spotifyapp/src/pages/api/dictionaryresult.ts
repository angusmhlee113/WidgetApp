import axios from "axios";
import { type NextApiRequest, type NextApiResponse } from "next";

const dictionaryresult = async (req: NextApiRequest, res: NextApiResponse) => {
  let result: Array<JSON> = [];
  if (req.method === "GET") {
    try {
      const { word } = req.query;
      const response = await axios.get(
        `https://dictionaryapi.com/api/v3/references/medical/json/doctor?key=a743a27b-3e0d-40bf-a714-f2f9d069a7e7`
      );
      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].meta.id.includes(":")) {
          result.push(response.data[i]);
        }
      }
      if (response.data.length > 0) {
        res.status(200).json(result);
      }
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  }
};

export default dictionaryresult;
