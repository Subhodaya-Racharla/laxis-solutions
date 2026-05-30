import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#111111",
          borderRadius: 40,
          display: "flex",
          position: "relative",
        }}
      >
        {/* Vertical stroke of L */}
        <div
          style={{
            position: "absolute",
            left: 40,
            top: 34,
            width: 34,
            height: 112,
            background: "white",
            borderRadius: 8,
          }}
        />
        {/* Horizontal stroke of L */}
        <div
          style={{
            position: "absolute",
            left: 40,
            top: 118,
            width: 100,
            height: 28,
            background: "white",
            borderRadius: 8,
          }}
        />
        {/* Indigo accent — corner where strokes meet */}
        <div
          style={{
            position: "absolute",
            left: 40,
            top: 118,
            width: 34,
            height: 28,
            background: "#6366f1",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
