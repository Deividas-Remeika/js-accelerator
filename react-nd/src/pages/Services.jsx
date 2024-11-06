import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../router/consts";

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(ROUTES.SEARCH_CATEGORY.replace("/:category", "/cleaning"));
  }, [navigate]);

  return null;
};

export default Services;
