import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ACIPL – Interior Designers & Construction Company in Bangalore";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #001252 0%, #002080 60%, #001252 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              background: "#C9A84C",
              height: "4px",
              width: "120px",
              borderRadius: "2px",
            }}
          />
          <div
            style={{
              color: "#C9A84C",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            AC-IPL.IN
          </div>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              color: "#C9A84C",
              fontSize: "22px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Bangalore's Trusted Experts
          </div>
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "58px",
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            Interior Design &amp; Construction in Bangalore
          </div>
          <div
            style={{
              color: "#CBD5E1",
              fontSize: "26px",
              maxWidth: "780px",
              lineHeight: 1.4,
            }}
          >
            Home Interiors · Modular Kitchens · Office Fit-Outs · Turnkey Construction
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "32px" }}>
            {["10+ Years", "200+ Projects", "Yelahanka HQ"].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(201,168,76,0.15)",
                  border: "1px solid rgba(201,168,76,0.4)",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  color: "#C9A84C",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div
            style={{
              background: "#C9A84C",
              borderRadius: "12px",
              padding: "14px 28px",
              color: "#001252",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            Free Consultation
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
