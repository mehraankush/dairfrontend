"use client"
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React from "react";
import { colorScale, countries } from "./Countries";

function WorldMap() {
  return (
    <div style={{ margin: "auto", width: "300px", height: "300px" }} className="mt-5">
         <VectorMap
        map={worldMill}
        containerStyle={{
          width: "300px",
          height: "300px",
        }}
        backgroundColor="#fff"
        series={{
          regions: [
            {
              scale: colorScale,
              values: countries,
              max: 100,
            },
          ],
        }}
        />
    </div>
  );
}

export default WorldMap;