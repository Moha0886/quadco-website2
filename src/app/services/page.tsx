import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function Services() {
  return (
    <Box sx={{
      minHeight: '100vh',
      width: '100%',
      position: 'relative',
      py: { xs: 4, md: 8 },
      background: 'linear-gradient(135deg, #e3f0ff 0%, #f9f9f9 100%)',
      overflow: 'hidden',
    }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          opacity: 0.12,
          background: 'url(/quadco-logo.png) center/cover no-repeat',
        }}
      />
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ fontWeight: 700, fontSize: { xs: 32, md: 44 } }}>
          Our Services
        </Typography>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' },
          gap: 8,
          mt: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {/* ICT Solutions */}
          <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 4,
            minHeight: 420,
            minWidth: 380,
            maxWidth: 480,
            boxShadow: 6,
            borderRadius: 6,
            background: 'rgba(255,255,255,0.95)',
          }}>
            <img src="/ICT solutions.jpg" alt="ICT Solutions" style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 8 }} />
            <CardContent sx={{ width: '100%', color: 'var(--foreground)' }}>
              <Typography variant="h5" fontWeight={600} gutterBottom align="center">ICT Solutions</Typography>
              <Divider sx={{ mb: 1 }} />
              <Typography variant="body1" align="center">
                Comprehensive ICT solutions tailored for your business needs, including infrastructure, software, and support.
              </Typography>
            </CardContent>
          </Card>
          {/* IT Strategy & Governance */}
          <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 4,
            minHeight: 420,
            minWidth: 380,
            maxWidth: 480,
            boxShadow: 6,
            borderRadius: 6,
            background: 'rgba(255,255,255,0.95)',
          }}>
            <img src="/IT strategy .jpg" alt="IT Strategy & Governance" style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 8 }} />
            <CardContent sx={{ width: '100%', color: 'var(--foreground)' }}>
              <Typography variant="h5" fontWeight={600} gutterBottom align="center">IT Strategy & Governance</Typography>
              <Divider sx={{ mb: 1 }} />
              <Typography variant="body1" align="center">
                Expert guidance on IT strategy, governance, and organizational design to drive business growth and efficiency.
              </Typography>
            </CardContent>
          </Card>
          {/* Oil & Gas Consulting */}
          <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 4,
            minHeight: 420,
            minWidth: 380,
            maxWidth: 480,
            boxShadow: 6,
            borderRadius: 6,
            background: 'rgba(255,255,255,0.95)',
          }}>
            <img src="/Oil and Gas .jpg" alt="Oil & Gas Consulting" style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 8 }} />
            <CardContent sx={{ width: '100%', color: 'var(--foreground)' }}>
              <Typography variant="h5" fontWeight={600} gutterBottom align="center">Oil & Gas Consulting</Typography>
              <Divider sx={{ mb: 1 }} />
              <Typography variant="body1" align="center">
                Specialized consulting for the oil & gas sector, including operations, safety, and compliance.
              </Typography>
            </CardContent>
          </Card>
          {/* Engineering */}
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4, minHeight: 420, minWidth: 380, maxWidth: 480, boxShadow: 6, borderRadius: 6, background: 'rgba(255,255,255,0.95)' }}>
            <img src="/Infrastructure.jpg" alt="Engineering" style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 8 }} />
            <CardContent sx={{ width: '100%' }}>
              <Typography variant="h5" fontWeight={600} gutterBottom align="center">Engineering</Typography>
                <Divider sx={{ mb: 1 }} />
                <Typography variant="body1" align="center">
                  Innovative engineering solutions for infrastructure, systems, and process optimization to support your business objectives.
                </Typography>
            </CardContent>
          </Card>
          {/* Security */}
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4, minHeight: 420, minWidth: 380, maxWidth: 480, boxShadow: 6, borderRadius: 6, background: 'rgba(255,255,255,0.95)' }}>
            <img src="/Security 2 .jpg" alt="Security" style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 8 }} />
            <CardContent sx={{ width: '100%' }}>
              <Typography variant="h5" fontWeight={600} gutterBottom align="center">Security</Typography>
                <Divider sx={{ mb: 1 }} />
                <Typography variant="body1" align="center">
                  Advanced security solutions to protect your organization’s data, infrastructure, and operations from evolving threats.
                </Typography>
            </CardContent>
          </Card>
          {/* Advisory */}
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4, minHeight: 420, minWidth: 380, maxWidth: 480, boxShadow: 6, borderRadius: 6, background: 'rgba(255,255,255,0.95)' }}>
            <img src="/Consultoría-recursos-humanos.jpeg" alt="Advisory" style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 8 }} />
            <CardContent sx={{ width: '100%' }}>
              <Typography variant="h5" fontWeight={600} gutterBottom align="center">Advisory</Typography>
                <Divider sx={{ mb: 1 }} />
                <Typography variant="body1" align="center">
                  Professional advisory services to guide strategic decisions, risk management, and business transformation for sustainable growth.
                </Typography>
            </CardContent>
          </Card>
          {/* Capacity Building */}
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4, minHeight: 420, minWidth: 380, maxWidth: 480, boxShadow: 6, borderRadius: 6, background: 'rgba(255,255,255,0.95)' }}>
            <img src="/glenov-brankovic-ZYUcxbMeaIY-unsplash.jpg" alt="Capacity Building" style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 8 }} />
            <CardContent sx={{ width: '100%' }}>
              <Typography variant="h5" fontWeight={600} gutterBottom align="center">Capacity Building</Typography>
                <Divider sx={{ mb: 1 }} />
                <Typography variant="body1" align="center">
                  Training and development programs to enhance skills, knowledge, and performance for individuals and organizations.
                </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
