import React, { Component } from "react";
import vnTopo from "./data/gadm36_VNM_1.json";
import hoangsaTopo from "./data/hoangsa.json";
import truongsaTopo from "./data/truongsa.json";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

class App extends Component {
  render() {
    return (
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000,
          center: [105, 15], // coordinate of VietNam [long, lat]
        }}
        style={{
          width: "100%",
          height: "auto",
        }}
      >
        <ZoomableGroup center={[104, 17]}>
          <Geographies geography={vnTopo}>
            {({ geographies }) => {
              return geographies.map(
                (geography, i) =>
                  geography.id !== "ATA" && (
                    <Geography
                      key={i}
                      geography={geography}
                      onClick={() => {
                        alert(1);
                      }}
                      style={{
                        default: {
                          fill: "#808080",
                          stroke: "#212529",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        hover: {
                          fill: "#e6dfd9",
                          stroke: "#212529",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                      }}
                    />
                  )
              );
            }}
          </Geographies>
          <Geographies geography={hoangsaTopo}>
            {({ geographies }) => {
              return geographies.map(
                (geography, i) =>
                  geography.id !== "ATA" && (
                    <Geography
                      key={i}
                      geography={geography}
                      onClick={() => {
                        alert(1);
                      }}
                      style={{
                        default: {
                          fill: "#808080",
                          stroke: "#212529",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        hover: {
                          fill: "#e6dfd9",
                          stroke: "#212529",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                      }}
                    />
                  )
              );
            }}
          </Geographies>
          <Geographies geography={truongsaTopo}>
            {({ geographies }) => {
              return geographies.map(
                (geography, i) =>
                  geography.id !== "ATA" && (
                    <Geography
                      key={i}
                      geography={geography}
                      onClick={() => {
                        alert(1);
                      }}
                      style={{
                        default: {
                          fill: "#808080",
                          stroke: "#212529",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        hover: {
                          fill: "#e6dfd9",
                          stroke: "#212529",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                      }}
                    />
                  )
              );
            }}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    );
  }
}

export default App;
