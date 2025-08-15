"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: { main: "#1976d2" },
      secondary: { main: "#9c27b0" },
    },
  });

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="static" color="default" elevation={1} sx={{ mb: 4 }}>
            <Toolbar sx={{ justifyContent: "center", gap: 2 }}>
              {require("./TopNav").default()}
            </Toolbar>
          </AppBar>
          <Box component="main" sx={{ minHeight: "80vh" }}>
            {children}
          </Box>
          <Box component="footer" sx={{ bgcolor: "#212529", color: "#fff", mt: 8 }}>
            <Box sx={{ maxWidth: 1200, mx: "auto", py: 4, px: 2 }}>
              <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: { xs: "flex-start", md: "center" }, gap: 3 }}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>QUADCO Consults</Typography>
                  <Typography variant="body2" sx={{ mb: 0 }}>Simplifying work, accelerating growth.</Typography>
                </Box>
                {/* Social media icons removed as requested */}
              </Box>
              <Box sx={{ textAlign: "center", fontSize: 14, mt: 3 }}>
                © {new Date().getFullYear()} QUADCO Consults. All rights reserved.
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
