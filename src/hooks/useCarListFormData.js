import { useEffect, useState } from "react";

const useCarListFormData = () => {
  //set data in services
  const [carlistFormData, setCarListFOrmData] = useState([]);
  //fetch data from fajedb json file
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/carlistdata`)
      .then((response) => response.json())
      .then((data) => setCarListFOrmData(data));
  }, []);

  return [carlistFormData, setCarListFOrmData];
};

export default useCarListFormData;
