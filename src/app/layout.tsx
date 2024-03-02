import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/components/providers";
import Scripts from "@/components/scripts";
import { Toaster } from "@/components/ui/toaster";
import { validateEnvVars } from "@/lib/utils";
import { Metadata } from "next/types";
import "./globals.css";

export async function generateMetadata() {
  const title = "Pratik Kale | pratikkale.in";
  const description = "Hi there 👋, I am Pratik Kale Developer and Community Evangelist Public Speaker & Organizer @ GDG Cloud Pune";
  const images = "https://raw.githubusercontent.com/prtkdev/prtkdev/main/namecard.png";
  const url = "https://pratikkale.in";

  const metadata: Metadata = {
    metadataBase: new URL("https://pratikkale.in"),
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: title,
      images,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
      creator: "@pratikkalein",
      site: "@pratikkalein",
    },
  };

  return metadata;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  validateEnvVars();

  return (
    <html lang="en">
      <body>
        <div className="container flex min-h-screen flex-col pt-2">
          <Providers>
            <Scripts />
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </Providers>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
