import { ImageResponse } from "next/og";

export const alt = "Sauti Labs — building speech and language intelligence for Africa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 76px",
          color: "#f8fdfd",
          background:
            "radial-gradient(circle at 86% 15%, #17535d 0, #0b3c44 34%, #062e35 72%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="58" height="58" viewBox="0 0 64 64" fill="none">
            <path
              d="M32 6v52M20 15v34M44 15v34M9 24v16M55 24v16M3 30h4M57 30h4"
              stroke="#f8fdfd"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
          <span style={{ fontSize: 26, fontWeight: 700, letterSpacing: 4 }}>
            SAUTI LABS
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              color: "#93cfcB",
              fontSize: 21,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            African-language AI
          </div>
          <div
            style={{
              maxWidth: 980,
              fontSize: 66,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -2,
            }}
          >
            Building speech and language intelligence for Africa.
          </div>
          <div style={{ color: "#c4dcdd", fontSize: 24 }}>
            Research · models · data · responsible AI
          </div>
        </div>
        <div
          style={{
            width: 112,
            height: 6,
            borderRadius: 4,
            background: "#e9a23b",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
