// FixedQR.js
import React from "react";
import QRCode from "react-qr-code";

export default function FixedQR() {
  const link = "https://improve-my-city-frontend-r5qi.vercel.app";

  return (
    <div style={styles.container}>
      <h2>📱 Scan to Open My City App</h2>
      <div style={styles.qrBox}>
        <QRCode value={link} size={180} />
      </div>
      <p style={styles.text}>
        <a href={link} target="_blank" rel="noreferrer">{link}</a>
      </p>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "40px" },
  qrBox: { display: "inline-block", background: "#fff", padding: "10px", borderRadius: "8px" },
  text: { marginTop: "10px", fontSize: "14px" }
};
