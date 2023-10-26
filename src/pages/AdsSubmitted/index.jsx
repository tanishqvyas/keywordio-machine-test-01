import React, { useEffect } from "react";
import styles from "./AdsSubmitted.module.css";
import { useNavigate } from "react-router-dom";

// mui
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// assets
import { IMAGES } from "../../assets";

// constants
import { routes } from "../../constants/routes.constants";

const AdsSubmitted = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(routes.CREATE_ADS, { replace: true });
    }, 600);
  }, []);

  return (
    <div className={styles.container}>
      <img
        src={IMAGES.BACKGROUND1}
        alt="background image"
        className={styles.bg}
      />
      <div className={styles.card}>
        <CheckCircleIcon color="blue" />
        <br />
        <h4
          style={{
            color: "black",
          }}
        >
          Submitted
        </h4>
      </div>
    </div>
  );
};

export default AdsSubmitted;
