import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Virtual Assistant Services",
  description: "Virtual assistant services for real estate professionals",
  viewport: "width=device-width, initial-scale=1", // ✅ mobile scaling
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
        }}
      >
        {/* ✅ prevent horizontal scroll issues + allow footer to sit properly */}
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            overflowX: "hidden",
          }}
        >
          <Navbar />

          {/* main content grows */}
          <main style={{ flex: 1 }}>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
