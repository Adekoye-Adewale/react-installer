import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://akanda.netlify.app'),
  title: "Next App Installer By Akanda.Dev",
  description: "Next app generated by Aknada DEV",
  author: `Adekoye Adewale`,
  openGraph: {
    title: 'Next App Installer By Akanda.Dev',
    description: 'Next app generated by Aknada DEV',
    siteName: 'Akanda.Dev',
    images: [
      {
        width: 800,
        height: 400,
        alt: 'Next app generated by Aknada DEV',
      },
    ],
    type: `website`,
    url: `https://www.akanda.dev/`,
    locale: "en_NG",
  },
  twitter: {
    author: `Adekoye Adewale`,
    card: `summary_large_image`,
    site: `@__akanda__`,
    creator: `@__akanda__`,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: { 
    pinterest: "nopin",
  },
};

export const viewport = {
  themeColor: [
    { 
      media: '(prefers-color-scheme: light)', 
      color: '#fe0000',
    },
    { 
      media: '(prefers-color-scheme: dark)', 
      color: '#00ff00',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
