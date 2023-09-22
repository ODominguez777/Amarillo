import React, { useState } from "react";
import "./flores.css";
import touchme from "../assets/Tocame.jpeg";
import ReactAudioPlayer from "react-audio-player";
import musica from "../assets/musica.ogg";
export const FloresAmarillas = () => {
  const [texto, setTexto] = useState(false);
  const touchMeHarder = () => {
    setTexto(true);
  };
  return (
    <div className="titulo">
      <div className="slider">
        <h1>Hola Andrea ❤</h1>

        <button onClick={touchMeHarder}>
          <img
            src={touchme}
            alt="Si llegas a leer esto me debes un beso "
            className="touchme"
          />
        </button>
      </div>
      {texto && (
        <div className="texto" style={{ alignItems: "center" }}>
          <p>
            Hice esto para ti, se que no es mucho pero es trabajo honesto.
            Mínimo lo programé yo y no me copié de chatgpt 👌😔{" "}
          </p>

          <ReactAudioPlayer src={musica} autoPlay controls={false} />
        </div>
      )}

      {texto && (
        <div className="cubo">
          <div className=" tallo" style={{}}>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "30s",
                borderBottom: "0px",
                backgroundColor: "RGB(51, 72, 7)",
                marginLeft: 15,
                position: "absolute",
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "30s",
                borderBottom: "0px",
                backgroundColor: "RGB(51, 72, 7)",
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "30s",
                borderBottom: "0px",
                backgroundColor: "RGB(51, 72, 7)",
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "30s",
                borderBottom: "0px",
                backgroundColor: "RGB(90, 117, 25)",
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "30s",
                borderBottom: "0px",
                backgroundColor: "RGB(91, 117, 24)",
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "30s",
                borderBottom: "0px",
                backgroundColor: "RGB(80, 112, 10)",
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "30s",
                borderBottom: "0px",
                backgroundColor: "RGB(80, 112, 10)",
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "30s",
                borderBottom: "0px",
                backgroundColor: "RGB(69, 99, 9)",
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "25s",
                borderBottom: "0px",
                backgroundColor: "RGB(59, 80, 13)",
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "20s",
                borderBottom: "0px",
                backgroundColor: "RGB(59, 80, 13)",
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "15s",
                borderBottom: "0px",
                backgroundColor: "RGB(59, 80, 13)",
              }}
            ></div>

            <div
              className="pixelTallo"
              style={{
                animationDuration: "25s",
                borderBottom: "0px",
                backgroundColor: "RGB(77, 101, 16)",
                position: "absolute",
                marginLeft: -15,

                marginTop: -75,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "27s",
                borderBottom: "0px",
                backgroundColor: "RGB(77, 101, 16)",
                position: "absolute",
                marginLeft: -30,

                marginTop: -90,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "30s",
                borderBottom: "0px",
                backgroundColor: "RGB(77, 101, 16)",
                position: "absolute",
                marginLeft: -60,
                marginTop: -90,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "30s",
                borderBottom: "0px",
                backgroundColor: "RGB(77, 101, 16)",
                position: "absolute",
                marginLeft: -60,
                marginTop: -105,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "30s",
                borderBottom: "0px",
                backgroundColor: "RGB(77, 101, 16)",
                position: "absolute",
                marginLeft: -75,
                marginTop: -90,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "30s",
                borderBottom: "0px",
                backgroundColor: "RGB(77, 101, 16)",
                position: "absolute",
                marginLeft: -75,
                marginTop: -105,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "30s",
                borderBottom: "0px",
                backgroundColor: "RGB(94, 120, 29)",
                position: "absolute",
                marginLeft: -75,

                marginTop: -120,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "30s",
                borderBottom: "0px",
                backgroundColor: "RGB(69, 100, 9)",
                position: "absolute",
                marginLeft: -60,
                marginTop: -120,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "30s",
                borderBottom: "0px",
                backgroundColor: "RGB(73, 99, 14)",
                position: "absolute",
                marginLeft: -45,
                marginTop: -120,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "30s",
                borderBottom: "0px",
                backgroundColor: "RGB(59, 83, 8)",
                position: "absolute",
                marginLeft: -45,
                marginTop: -105,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "30s",
                borderBottom: "0px",
                backgroundColor: "RGB(66, 87, 25)",
                position: "absolute",
                marginLeft: -45,

                marginTop: -90,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "29s",
                borderBottom: "0px",
                backgroundColor: "RGB(66, 87, 25)",
                position: "absolute",
                marginLeft: -45,

                marginTop: -75,
              }}
            ></div>

            <div
              className="pixelTallo"
              style={{
                animationDuration: "29s",
                borderBottom: "0px",
                backgroundColor: "RGB(61, 81, 17)",
                position: "absolute",
                marginLeft: -30,
                marginTop: -75,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "27s",
                borderBottom: "0px",
                backgroundColor: "RGB(61, 81, 17)",
                position: "absolute",
                marginLeft: -30,

                marginTop: -60,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "27s",
                borderBottom: "0px",
                backgroundColor: "RGB(50, 77, 10)",
                position: "absolute",
                marginLeft: -15,
                marginTop: -60,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "25s",
                borderBottom: "0px",
                backgroundColor: "RGB(79, 111, 9)",
                position: "absolute",
                marginLeft: -15,
                marginTop: -45,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "27s",
                borderBottom: "0px",
                backgroundColor: "RGB(77, 101, 16)",
                position: "absolute",
                marginLeft: 75,

                marginTop: -60,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "27s",
                borderBottom: "0px",
                backgroundColor: "RGB(77, 101, 16)",
                position: "absolute",
                marginLeft: 90,
                marginTop: -60,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "25s",
                borderBottom: "0px",
                backgroundColor: "RGB(65, 90, 9)",
                position: "absolute",
                marginLeft: 90,

                marginTop: -45,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "25s",
                borderBottom: "0px",
                backgroundColor: "RGB(65, 90, 9)",
                position: "absolute",
                marginLeft: 75,
                marginTop: -45,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "25s",
                borderBottom: "0px",
                backgroundColor: "RGB(59, 80, 13)",
                position: "absolute",
                marginLeft: 60,
                marginTop: -45,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "20s",
                borderBottom: "0px",
                backgroundColor: "RGB(59, 80, 13)",
                position: "absolute",
                marginLeft: 60,
                marginTop: -30,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "20s",
                borderBottom: "0px",
                backgroundColor: "RGB(59, 80, 13)",
                position: "absolute",
                marginLeft: 45,
                marginTop: -30,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "15s",
                borderBottom: "0px",
                backgroundColor: "RGB(59, 80, 13)",
                position: "absolute",
                marginLeft: 30,
                marginTop: -15,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "25s",
                borderBottom: "0px",
                backgroundColor: "RGB(78, 111, 7)",
                position: "absolute",
                marginLeft: -60,
                marginTop: -45,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "25s",
                borderBottom: "0px",
                backgroundColor: "RGB(72, 95, 16)",
                position: "absolute",
                marginLeft: -45,
                marginTop: -45,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "20s",
                borderBottom: "0px",
                backgroundColor: "RGB(62, 86, 7)",
                position: "absolute",
                marginLeft: -60,
                marginTop: -30,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "20s",
                borderBottom: "0px",
                backgroundColor: "RGB(62, 86, 7)",
                position: "absolute",
                marginLeft: -45,
                marginTop: -30,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "20s",
                borderBottom: "0px",
                backgroundColor: "RGB(78, 111, 9)",
                position: "absolute",
                marginLeft: -30,
                marginTop: -30,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "15s",
                borderBottom: "0px",
                backgroundColor: "RGB(78, 111, 9)",
                position: "absolute",
                marginLeft: -15,
                marginTop: -15,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "10s",
                borderBottom: "0px",
                backgroundColor: "RGB(59, 80, 13)",
                position: "absolute",
                marginLeft: 15,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "10s",
                borderBottom: "0px",
                backgroundColor: "RGB(59, 80, 13)",
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "5s",
                backgroundColor: "RGB(59, 80, 13)",
              }}
            ></div>

            <div
              className="pixelTallo"
              style={{
                animationDuration: "10s",
                borderBottom: "0px",
                backgroundColor: "yellow",
                position: "absolute",
                marginTop: -195,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "10s",
                borderBottom: "0px",
                backgroundColor: "RGB(223, 176, 46)",
                position: "absolute",
                marginTop: -195,
                marginLeft: 15,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "10s",
                borderBottom: "0px",
                backgroundColor: "RGB(209, 154, 37)",
                position: "absolute",
                marginTop: -195,
                marginLeft: 30,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "10s",
                borderBottom: "0px",
                backgroundColor: "RGB(210, 153, 36)",
                position: "absolute",
                marginTop: -195,
                marginLeft: -15,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "10s",
                borderBottom: "0px",
                backgroundColor: "RGB(255, 222, 47)",
                position: "absolute",
                marginTop: -210,
                marginLeft: -30,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "10s",
                borderBottom: "0px",
                backgroundColor: "RGB(255, 222, 46)",
                position: "absolute",
                marginTop: -210,
                marginLeft: -15,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "10s",
                borderBottom: "0px",
                backgroundColor: "RGB(243, 205, 46)",
                position: "absolute",
                marginTop: -210,
                marginLeft: 0,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "10s",
                borderBottom: "0px",
                backgroundColor: "RGB(203, 143, 32)",
                position: "absolute",
                marginTop: -210,
                marginLeft: 15,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "10s",
                borderBottom: "0px",
                backgroundColor: "RGB(241, 204, 44)",
                position: "absolute",
                marginTop: -210,
                marginLeft: 30,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "10s",
                borderBottom: "0px",
                backgroundColor: "RGB(255, 220, 49)",
                position: "absolute",
                marginTop: -210,
                marginLeft: 45,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "10s",
                borderBottom: "0px",
                backgroundColor: "RGB(230, 191, 51)",
                position: "absolute",
                marginTop: -225,
                marginLeft: 30,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "10s",
                borderBottom: "0px",
                backgroundColor: "RGB(246, 215, 60)",
                position: "absolute",
                marginTop: -225,
                marginLeft: 15,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "10s",
                borderBottom: "0px",
                backgroundColor: "RGB(225, 183, 47)",
                position: "absolute",
                marginTop: -225,
              }}
            ></div>
            <div
              className="pixelTallo"
              style={{
                animationDuration: "10s",
                borderBottom: "0px",
                backgroundColor: "RGB(248, 220, 61)",
                position: "absolute",
                marginTop: -225,
                marginLeft: -15,
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};
