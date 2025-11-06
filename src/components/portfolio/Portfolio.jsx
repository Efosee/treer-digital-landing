import React from "react";
import { Container, Grid, Card, CardContent, Typography, Chip, Box } from "@mui/material";
import "./portfolio.css";
import {projects} from "./config";


export default function Portfolio() {
	return (
		<section className="portfolio" id="portfolio">
			<Container maxWidth="lg">
				<Typography variant="h3" className="portfolio__title">
					Наши проекты
				</Typography>
				<Typography variant="h6" className="portfolio__subtitle">
					Реальные кейсы, которые решают бизнес-задачи наших клиентов
				</Typography>

				<Grid container spacing={4}>
					{projects.map((p, i) => (
						<Grid size={{xs:12}} key={i}>
							<Card className="portfolio__card">
								<Box className="portfolio__card-header" sx={{ backgroundColor: p.color }} />
								<CardContent className="portfolio__card-content">
									<Grid container spacing={3}>
										<Grid size={{xs:12, md:7}}>
											<Typography variant="h5" className="portfolio__card-title">
												{p.title}
											</Typography>
											<Typography className="portfolio__card-desc">
												{p.desc}
											</Typography>
											<Grid size={{xs:12}} md={5}>
											<Box className={`portfolio__images portfolio__images--${i === 0 ? 'qr' : i === 1 ? 'wb' : i === 3 ? 'wms' : 'default'}`}>
												{p.images.map((img, j) => (
													<img
														key={j}
														src={img}
														alt={`${p.title} screenshot ${j + 1}`}
														className="portfolio__image"
														style={{ zIndex: p.images.length - j }}
													/>
												))}
											</Box>
										</Grid>
											<Box className="portfolio__tags">
												{p.tags.map((tag, j) => (
													<Chip key={j} label={tag} size="small" className="portfolio__tag" />
												))}
											</Box>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</section>
	);
}