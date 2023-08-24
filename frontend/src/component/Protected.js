import { useState } from "react";
import { Navigate } from "react-router-dom";
import Access from "./Access";

function Protected({ children }) {
  const [admin, setAdmin] = useState(false);

  const handleAdmin = () => {
    setAdmin(true);
  };

  return <div>{admin ? children : <Access onAdmin={handleAdmin} />}</div>;
}

export default Protected;
