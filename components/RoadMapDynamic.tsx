"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import type RoadMap from "./RoadMap";

const RoadMapNoSSR = dynamic(() => import("./RoadMap"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#e9eef3",
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          border: "3px solid #d6deea",
          borderTopColor: "#1B4F8A",
          borderRadius: "50%",
          animation: "rw-spin .8s linear infinite",
        }}
      />
    </div>
  ),
});

export default function RoadMapDynamic(props: ComponentProps<typeof RoadMap>) {
  return <RoadMapNoSSR {...props} />;
}
