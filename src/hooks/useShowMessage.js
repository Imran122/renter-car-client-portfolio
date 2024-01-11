import { useState } from "react";

const useShowMessage = () => {
  const [showElement, setShowElement] = useState(false);

  setTimeout(function () {
    setShowElement(false);
  }, 10000);

  return [showElement, setShowElement];
};
export default useShowMessage;
