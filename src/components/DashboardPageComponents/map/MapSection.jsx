"use client"

import dynamic from 'next/dynamic';

const VectorMap = dynamic(() => import('@react-jvectormap/core').then((mod) => mod.VectorMap), { ssr: false });

import { worldMill } from "@react-jvectormap/world";
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
