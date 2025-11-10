import React, { useMemo, useState } from "react";
import {
	Container,
	Grid,
	Card,
	CardContent,
	Typography,
	Chip,
	Box,
	Dialog,
	DialogContent,
	IconButton,
	Link
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { Slider } from "../slider/Slider";
import "./portfolio.css";
import { projects } from "./config";


export default function Portfolio() {
	const [activeProjectIndex, setActiveProjectIndex] = useState(null);

	const handleOpenProject = (index) => {
		setActiveProjectIndex(index);
	};

	const handleClose = () => {
		setActiveProjectIndex(null);
	};

	const activeProject = useMemo(() => {
		if (activeProjectIndex === null) {
			return null;
		}

		return projects[activeProjectIndex];
	}, [activeProjectIndex]);

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
						<Grid size={{ xs: 12 }} key={i}>
							<Card className="portfolio__card">
								<Box className="portfolio__card-header" sx={{ backgroundColor: p.color }} />
								<CardContent className="portfolio__card-content">
									<Grid container spacing={3}>
										<Grid size={{ xs: 12 }}>
											<Typography variant="h5" className="portfolio__card-title">
												{p.title}
											</Typography>
											<Typography className="portfolio__card-desc">
												{p.desc}
											</Typography>
											<Box sx={{
												height: {
													xs: i === 0 ? "50vh" : "40vw",
													sm: i === 0 ? "50vh" : "40vh",
													md: "50vh",
												},
											}}>
												<Slider imgSrcs={p.images} onOpen={() => handleOpenProject(i)} />
											</Box>
											<Box className="portfolio__tags">
												{p.tags.map((tag, j) => (
													<Chip key={j} label={tag} size="small" className="portfolio__tag" />
												))}
											</Box>
											<Link href={p.linkDetails} className="portfolio__detailts" target="_blank">
												ПОДРОБНЕЕ
											</Link>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>

			<Dialog
				open={Boolean(activeProject)}
				onClose={handleClose}
				maxWidth={false}
				PaperProps={{
					sx: {
						backgroundColor: "background.default",
						width: "90vw",
						height: "90vh",
						maxWidth: "90vw",
						maxHeight: "90vh",
						margin: 0,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: 3,
						overflow: "hidden",
						position: "relative"
					}
				}}
				BackdropProps={{
					sx: {
						backgroundColor: "rgba(0, 0, 0, 0.85)"
					}
				}}
			>
				<DialogContent
					sx={{
						p: 0,
						height: "100%",
						width: "100%",
						display: "flex",
						position: "relative",
						overflow: "hidden"
					}}
				>
					<IconButton
						aria-label="Закрыть"
						onClick={handleClose}
						sx={{ position: "absolute", top: 16, right: 16, zIndex: 1, color: "text.primary" }}
					>
						<CloseIcon />
					</IconButton>
					<Box
						sx={{
							width: "100%",
							height: "100%",
							p: { xs: 2, md: 4 },
							boxSizing: "border-box"
						}}
					>
						{activeProject && <Slider imgSrcs={activeProject.images} isModal />}
					</Box>
				</DialogContent>
			</Dialog>
		</section>
	);
}