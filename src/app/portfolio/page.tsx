import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function Portfolio() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Our Portfolio
      </Typography>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 32,
        justifyContent: 'center',
      }}>
        {/* Project Alpha */}
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
              alt="Project Alpha"
              sx={{ objectFit: 'contain', bgcolor: '#f5f5f5' }}
            />
            <CardContent>
              <Typography variant="overline" color="primary.main" gutterBottom>
                Digital Transformation
              </Typography>
              <Typography variant="h5" component="div" gutterBottom>
                Project Alpha
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                A successful business transformation project for a leading client.
              </Typography>
              <Typography variant="caption" color="text.secondary">
                #Strategy #Consulting
              </Typography>
            </CardContent>
          </Card>
        </div>
        {/* Beta Expansion */}
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
              alt="Beta Expansion"
              sx={{ objectFit: 'contain', bgcolor: '#f5f5f5' }}
            />
            <CardContent>
              <Typography variant="overline" color="primary.main" gutterBottom>
                Market Expansion
              </Typography>
              <Typography variant="h5" component="div" gutterBottom>
                Beta Expansion
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Market expansion and strategy execution for a fast-growing company.
              </Typography>
              <Typography variant="caption" color="text.secondary">
                #Growth #Execution
              </Typography>
            </CardContent>
          </Card>
        </div>
        {/* Gamma Training */}
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
              alt="Gamma Training"
              sx={{ objectFit: 'contain', bgcolor: '#f5f5f5' }}
            />
            <CardContent>
              <Typography variant="overline" color="primary.main" gutterBottom>
                Professional Workshops
              </Typography>
              <Typography variant="h5" component="div" gutterBottom>
                Gamma Training
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Delivered a series of professional workshops for client teams.
              </Typography>
              <Typography variant="caption" color="text.secondary">
                #Training #Development
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}
