import { useState, useEffect } from "react";
import api from "../api";

export default function useActions() {
  const [actions, setActions] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.get("/user/actions");
      setActions(data);
    };
    fetch();
    const id = setInterval(fetch, 60000);
    return () => clearInterval(id);
  }, []);
  return actions;
}
