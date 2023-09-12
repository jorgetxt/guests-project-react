import { useEffect } from "react";
import { rollStorage } from "../hooks/baseApi";
import { rolls } from "./rolls";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHook";

const useAuthGuards = () => {
  const navigate = useNavigate();

  const roll = useAppSelector((store) => store.auth?.auth?.user?.roll);

  const havePermission =
    rolls.recepcion === rollStorage || rolls.recepcion === roll;

  const useAuthGuard = () => {
    useEffect(() => {
      if (!(rollStorage === rolls.recepcion || rolls.recepcion === roll)) {
        navigate("/");
      }
    });
  };
  return { havePermission, useAuthGuard };
};

export default useAuthGuards;
