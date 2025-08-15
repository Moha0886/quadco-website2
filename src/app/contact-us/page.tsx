"use client";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import styles from "./contact-form.module.css";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<null | "success" | "error" | "warning" | "info">(null);
  const [feedback, setFeedback] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setFeedback("");
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setStatus("error");
      setFeedback("Please fix the errors and try again.");
      return;
    }
    setSubmitting(true);
    // Simulate async send
    setTimeout(() => {
      setSubmitting(false);
      setStatus("success");
      setFeedback("Thank you for contacting us! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: { xs: 4, md: 8 },
        background: 'linear-gradient(135deg, #f9f9f9 0%, #e3f0ff 100%)',
        overflow: 'hidden',
      }}
    >
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
      <Container maxWidth="sm">
        <Card sx={{ borderRadius: 4, boxShadow: 4, px: { xs: 2, md: 4 }, py: { xs: 3, md: 5 } }}>
          <CardContent>
            <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ fontWeight: 700, fontSize: { xs: 32, md: 40 } }}>
              Contact Us
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 2, color: 'text.secondary' }}>
              Reach out to QUADCO Consults for inquiries, collaborations, or support.
            </Typography>
            <form noValidate onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  label="Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  required
                  value={form.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                />
                <TextField
                  label="Email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                />
                <TextField
                  label="Message"
                  name="message"
                  variant="outlined"
                  fullWidth
                  required
                  multiline
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  error={!!errors.message}
                  helperText={errors.message}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={submitting}
                  sx={{ minWidth: 150 }}
                >
                  {submitting ? "Sending..." : "Send Message"}
                  {submitting && <span className={styles["contact-spinner"]} />}
                </Button>
                {feedback && (
                  <div
                    className={
                      styles["contact-feedback"] +
                      (status ? " " + styles[status] : "")
                    }
                    role="alert"
                    aria-live="polite"
                  >
                    {feedback}
                  </div>
                )}
              </Stack>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
