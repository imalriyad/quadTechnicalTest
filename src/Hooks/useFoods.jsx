import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFoods = () => {
  const { data:foods } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await axios.get(
        "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
      );

      return res.data;
    },
  });
  return [foods];
};

export default useFoods;
