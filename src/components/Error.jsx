import React from "react";
import style from "../style/Error.module.css";

function Error() {
  return (
    <div className={style.error}>
      <p>
        We apologize for the inconvenience caused due to technical failure. We
        are committed to providing you with the best and timely service, and
        our team is working diligently to resolve the issue. Thank you for your
        understanding.
      </p>
    </div>
  );
}

export default Error;
