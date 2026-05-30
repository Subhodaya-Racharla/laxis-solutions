import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#111111",
          borderRadius: 7,
          display: "flex",
          position: "relative",
        }}
      >
        {/* Vertical stroke of L */}
        <div
          style={{
            position: "absolute",
            left: 7,
            top: 6,
            width: 6,
            height: 19,
            background: "white",
            borderRadius: 2,
          }}
        />
        {/* Horizontal stroke of L */}
        <div
          style={{
            position: "absolute",
            left: 7,
            top: 21,
            width: 18,
            height: 5,
            background: "white",
            borderRadius: 2,
          }}
        />
        {/* Indigo accent — corner where strokes meet */}
        <div
          style={{
            position: "absolute",
            left: 7,
            top: 21,
            width: 6,
            height: 5,
            background: "#6366f1",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
