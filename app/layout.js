import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "@/components/ui/header";
import { simple, dark } from "@clerk/themes";

// Import Geist font for sans-serif text
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Import Geist Mono font for monospace text (e.g., code)
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for the website
export const metadata = {
  title: "Chanakya Ai",
  description: "Ai based Skill and Career Advisor",
};

// Footer note component
const footerNote = (
  <p className="text-center text-sm text-gray-200 italic">
    &copy; {new Date().getFullYear()} Made with ❤️ by Cybernauts. All rights
    reserved.
  </p>
);

export default function RootLayout({ children }) {
  return (
    // ClerkProvider to manage user authentication
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning> 
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* ThemeProvider to manage theme settings */}
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* Header */}
            <Header />
            {/* Main content */}
            <main className="min-h-screen">{children}</main>
            {/* Footer */}
            <footer className="border-t">
              <div className="container mx-auto px-4 py-6">{footerNote}</div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
