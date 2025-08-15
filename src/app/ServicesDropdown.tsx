import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function ServicesDropdown() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        color="primary"
        variant="text"
        onClick={handleClick}
        aria-controls={open ? "services-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        Services
      </Button>
      <Menu
        id="services-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "services-button" }}
      >
        <MenuItem component={Link} href="/services#ict" onClick={handleClose}>ICT Solutions</MenuItem>
        <MenuItem component={Link} href="/services#it-strategy" onClick={handleClose}>IT Strategy</MenuItem>
        <MenuItem component={Link} href="/services#data-governance" onClick={handleClose}>IT/Data Governance</MenuItem>
        <MenuItem component={Link} href="/services#org-design" onClick={handleClose}>Organizational Design</MenuItem>
        <MenuItem component={Link} href="/services#service-mgmt" onClick={handleClose}>Service Management</MenuItem>
        <MenuItem component={Link} href="/services#capacity-building" onClick={handleClose}>Capacity Building</MenuItem>
        <MenuItem component={Link} href="/services#oil-gas" onClick={handleClose}>Oil & Gas Consulting</MenuItem>
        <MenuItem component={Link} href="/services#infra-ops" onClick={handleClose}>Infrastructure & Operations</MenuItem>
        <MenuItem component={Link} href="/services#security" onClick={handleClose}>Security</MenuItem>
        <MenuItem component={Link} href="/services#advisory" onClick={handleClose}>Advisory</MenuItem>
        <MenuItem component={Link} href="/services#quality-policy" onClick={handleClose}>Quality Policy</MenuItem>
        <MenuItem component={Link} href="/services#hse-policy" onClick={handleClose}>HSE Policy</MenuItem>
        <MenuItem component={Link} href="/services#partners" onClick={handleClose}>Our Partners</MenuItem>
      </Menu>
    </>
  );
}
