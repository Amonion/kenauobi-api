'use client'
import './globals.css'
import Script from 'next/script'
import 'bootstrap-icons/font/bootstrap-icons.css'
import React from 'react'
import { ThemeProvider } from '@/context/ThemeProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  //------------INITIALIZE SOUND, GET USER IP & INTERNET CONNECTION -------------//
  return (
    <html lang="en">
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function () {
              try {
                var savedTheme = localStorage.getItem("theme");
                var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                var theme = savedTheme || (prefersDark ? "dark" : "light");
                document.documentElement.classList.add(theme);
              } catch (_) {}
            })();
          `}
        </Script>

        {/* Favicon handled by Next.js file conventions (place favicon.ico, icon.png, apple-icon.png in /app) */}
        {/* Fonts (kept as they improve performance) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body
        className={`antialiased min-h-[100vh] bg-[var(--primaryBG)] text-[var(--primaryTxt)]`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
