// layout.js

export const metadata = {
  title: "JOUS Store",
  description: "أفضل متجر لبيع عملات الألعاب",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
