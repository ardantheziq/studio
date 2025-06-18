
import type { Metadata } from 'next';
import './globals.css'; // Tailwind base/components/utilities and updated CSS vars

export const metadata: Metadata = {
  title: 'Kubet Indonesia Togel Terpercaya Pasti Untung',
  description: 'Situs Terpercaya dengan bonus melimpah dan peluang menang lebih besar. Daftar dan Login KUBET sekarang!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" amp="">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <link rel="canonical" href="https://www.example.com/halaman-kubet-anda" /> {/* Ganti dengan URL halaman Anda yang sebenarnya */}
        
        {/* AMP Boilerplate */}
        <style dangerouslySetInnerHTML={{ __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}` }} />
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}` }} />
        </noscript>
        
        {/* AMP Scripts */}
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-animation" src="https://cdn.ampproject.org/v0/amp-animation-0.1.js"></script>
        <script async custom-element="amp-position-observer" src="https://cdn.ampproject.org/v0/amp-position-observer-0.1.js"></script>
        <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>

        {/* Google Fonts - Poppins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
