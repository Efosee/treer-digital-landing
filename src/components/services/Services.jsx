import React from "react";
import { Container, Grid, Typography, Paper, Box } from "@mui/material";

import "./services.css";
import {SERVICES} from "./config";


export default function Services() {
  return (
    <section className="services" id="services">
      <Container maxWidth="lg">
        <Typography variant="h3" className="services__title">
          Наши услуги
        </Typography>
        <Grid container spacing={3} rowSpacing={5}>
          {SERVICES.map((s, i) => (
            <Grid item size={{xs:12, md:4}} key={i}>
              <Paper className="service__card" elevation={2}>
                <Box className="service__icon-wrapper">
                  {<s.icon className="service__icon"/>}
                </Box>
                <Typography variant="h5" className="service__card-title">
                  {s.title}
                </Typography>
                <Typography className="service__card-desc">
                  {s.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}