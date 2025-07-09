import { createContext, useEffect } from "react";
import { useState } from "react";
import { getListAllCommCd } from "lib/api";
import { RESULT } from "lib/common";

// 비어있는 context 생성
export const CodeContext = createContext();

const CodeStore = ({ children }) => {
  const [commonCodes, setCommonCodes] = useState([]);

  useEffect(() => {
    getListAllCommCd().then((data) => {
      if (data.resultCode === RESULT.SUCCESS) {
        setCommonCodes(data.resultData);
      }
    });
  }, []);

  return (
    <CodeContext.Provider value={commonCodes}>{children}</CodeContext.Provider>
  );
};

export default CodeStore;
