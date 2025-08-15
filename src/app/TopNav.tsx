"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ServicesDropdownActive from "./ServicesDropdownActive";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Partners", href: "/partners" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function TopNav() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        mb: 4,
        borderRadius: 4,
        boxShadow: '0 4px 24px 0 rgba(40, 60, 90, 0.10)',
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(12px)',
        border: '1px solid #e0e0e0',
      }}
    >
      <Toolbar sx={{ justifyContent: "flex-start", px: { xs: 1, md: 4 } }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Link href="/" style={{ textDecoration: "none", color: "inherit", display: 'flex', alignItems: 'center' }}>
            <img src="/quadco-logo.png" alt="QUADCO Logo" style={{ height: 60 }} />
          </Link>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Button
                  key={link.href}
                  component={Link}
                  href={link.href}
                  color={isActive ? "secondary" : "primary"}
                  variant={isActive ? "contained" : "text"}
                  sx={{
                    fontWeight: 700,
                    fontSize: 22,
                    letterSpacing: 1.2,
                    textTransform: 'uppercase',
                    textShadow: '0 1px 6px rgba(40,47,75,0.10)',
                    fontFamily: 'Noto Sans, Arial, Helvetica, sans-serif',
                    ...(isActive ? { color: 'var(--accent)' } : {})
                  }}
                >
                  {link.label}
                </Button>
              );
            })}
          </Box>
        </Box>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{ display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          sx={{ display: { md: "none" } }}
        >
          <List sx={{ width: 220 }}>
            {navLinks.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton component={Link} href={link.href} onClick={handleDrawerToggle} selected={pathname.startsWith(link.href)}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
