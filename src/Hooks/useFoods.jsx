import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFoods = () => {
  const { data:foods ,refetch} = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await axios.get(
        "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
      );

      return res.data.Items;
    },
  });

  return [foods,refetch];
};

export default useFoods;
