import React from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { useSelector } from "react-redux";

const ProgressBar = () => {
  const percentage = useSelector((state) => state.file.progress);

  return (
    <div style={{ marginTop: "2rem" }}>
      <Progress
        theme={{ success: { color: `#4B9CE2`, symbol: "✔️" } }}
        percent={percentage}
        status="success"
      />
    </div>
  );
};

export default ProgressBar;
