import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function Team() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Our Team
      </Typography>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 32,
        justifyContent: 'center',
      }}>
        {/* Jane Doe */}
        <div style={{ flex: '1 1 320px', maxWidth: 380, minWidth: 280 }}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-8px) scale(1.03)',
                boxShadow: 8,
              },
            }}
          >
            <CardMedia
              component="img"
              height="160"
              image="/vercel.svg"
              alt="Jane Doe"
              sx={{ objectFit: 'contain', bgcolor: '#f5f5f5' }}
            />
            <CardContent>
              <Typography variant="overline" color="primary.main" gutterBottom>
                Leadership
              </Typography>
              <Typography variant="h5" component="div" gutterBottom>
                Jane Doe
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                CEO & Lead Consultant
              </Typography>
              <Typography variant="caption" color="text.secondary">
                #Strategy #Management
              </Typography>
            </CardContent>
          </Card>
        </div>
        {/* John Smith */}
        <div style={{ flex: '1 1 320px', maxWidth: 380, minWidth: 280 }}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-8px) scale(1.03)',
                boxShadow: 8,
              },
            }}
          >
            <CardMedia
              component="img"
              height="160"
              image="/globe.svg"
              alt="John Smith"
              sx={{ objectFit: 'contain', bgcolor: '#f5f5f5' }}
            />
            <CardContent>
              <Typography variant="overline" color="primary.main" gutterBottom>
                Strategy
              </Typography>
              <Typography variant="h5" component="div" gutterBottom>
                John Smith
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Strategy Specialist
              </Typography>
              <Typography variant="caption" color="text.secondary">
                #Business #Growth
              </Typography>
            </CardContent>
          </Card>
        </div>
        {/* Sarah Lee */}
        <div style={{ flex: '1 1 320px', maxWidth: 380, minWidth: 280 }}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-8px) scale(1.03)',
                boxShadow: 8,
              },
            }}
          >
            <CardMedia
              component="img"
              height="160"
              image="/window.svg"
              alt="Sarah Lee"
              sx={{ objectFit: 'contain', bgcolor: '#f5f5f5' }}
            />
            <CardContent>
              <Typography variant="overline" color="primary.main" gutterBottom>
                Training
              </Typography>
              <Typography variant="h5" component="div" gutterBottom>
                Sarah Lee
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Training & Development
              </Typography>
              <Typography variant="caption" color="text.secondary">
                #Learning #People
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}
