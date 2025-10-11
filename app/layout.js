import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { neobrutalism } from "@clerk/themes";
import Link from "next/link";

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
  title: "PathNexus",
  description: "Ai based Skill and Career Advisor",
};

// Footer note component
const footerNote = (
  <div className="container mx-auto px-4">
    <div className="text-black">
      <h3 className="text-xl font-bold flex items-center">PathNEXUS.ai</h3>
      <p className="text-justify">
        Your career copilot, guiding you to success with AI-powered insights and
        personalized growth paths.
      </p>
    </div>
    <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h4 className="text-lg font-semibold mb-4">Features</h4>
        <ul className="space-y-1 text-black ">
          <li>
            <a className="hover:underline">
              <Link href="/dashboard">Career Suggestions</Link>
            </a>
          </li>
          <li>
            <a className="hover:underline">
              <Link href="/dashboard">Career Path Simulator</Link>
            </a>
          </li>
          <li>
            <a className="hover:underline">
              <Link href="/Skill_IQ">Skill IQ Test</Link>
            </a>
          </li>
          <li>
            <a className="hover:underline">
              <Link href="/dashboard">Path Planner</Link>
            </a>
          </li>
          <li>
            <a className="hover:underline">
              <Link href="/dashboard">Resources Suggestion</Link>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Important Links</h4>
        <ul className="space-y-1 text-black">
          <li>
            <a className="hover:underline">
              <Link href="/dashboard">Industry Insights</Link>
            </a>
          </li>
          <li>
            <a className="hover:underline">
              <Link href="/help">Help Center</Link>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Resources</h4>
        <ul className="space-y-1 text-black">
          <li>
            <a className="hover:underline">
              <Link href="/resources">Blog</Link>
            </a>
          </li>
          <li>
            <a className="hover:underline">
              <Link href="/resources">Community</Link>
            </a>
          </li>
          <li>
            <a className="hover:underline">
              <Link href="/resources">Courses</Link>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Company</h4>
        <ul className="space-y-1 text-black">
          <li>
            <a className="hover:underline">
              <Link href="/about">About Us</Link>
            </a>
          </li>
          <li>
            <a className="hover:underline">
              <Link href="/contact">Contact Us</Link>
            </a>
          </li>
          <li>
            <a className="hover:underline">
              <Link href="/privacyAndTerms">Privacy Policy</Link>
            </a>
          </li>
          <li>
            <a className="hover:underline">
              <Link href="/privacyAndTerms">Terms of Service</Link>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <p className="text-center text-sm text-black-200 italic">
        &copy; {new Date().getFullYear()} Made with ❤️ by PathNEXUS Team. All
        rights reserved.
      </p>
    </div>
  </div>
);

export default function RootLayout({ children }) {
  return (
    // ClerkProvider to manage user authentication
    <ClerkProvider appearance={{ baseTheme: neobrutalism }}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* ThemeProvider to manage theme settings */}
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {/* Header */}
            <Header />
            {/* Main content */}
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
            {/* Footer */}
            <footer className="border-t bg-white">
              <div className="container mx-auto px-4 py-6">{footerNote}</div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
