import "./globals.css";

export const metadata = {
  title: "Miagao Pickleball Club",
  description: "Track courts, players, and the next-up queue.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
