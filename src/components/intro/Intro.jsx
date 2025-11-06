
import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import "./intro.css";

export default function Intro() {
	return (
		<section className="intro" id="intro">
			<Container maxWidth="lg">
				<Box className="intro__content">
					<Typography variant="h1" className="intro__title">
						Treer — цифровое агентство полного цикла
					</Typography>
					<Typography variant="h5" className="intro__subtitle">
						Мы проектируем, разрабатываем и запускаем программные продукты под ключ.
						От идеи до масштабирования — с нами ваш бизнес получает надежные технологические решения.
					</Typography>

					<Grid container spacing={4} className="intro__stats">
						<Grid item size={{ xs: 12, sm: 4 }}>
							<Box className="intro__stat">
								<Typography variant="h3" className="intro__stat-number">2+</Typography>
								<Typography variant="body1" className="intro__stat-label">Года на рынке</Typography>
							</Box>
						</Grid>
						<Grid item size={{ xs: 12, sm: 4 }}>
							<Box className="intro__stat">
								<Typography variant="h3" className="intro__stat-number">10+</Typography>
								<Typography variant="body1" className="intro__stat-label">Реализованных проектов</Typography>
							</Box>
						</Grid>
						<Grid item size={{ xs: 12, sm: 4 }}>
							<Box className="intro__stat">
								<Typography variant="h3" className="intro__stat-number">100%</Typography>
								<Typography variant="body1" className="intro__stat-label">Довольных клиентов</Typography>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</section>
	);
}
