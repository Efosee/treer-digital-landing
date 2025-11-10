import React from "react";
import { Container, Typography, Box, Grid, Paper, Link } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./contacts.css";

const contacts = [
	{
		icon: <PhoneIcon className="contact__icon" />,
		label: "Телефон",
		value: "+7 (968) 783-61-02",
		link: "tel:+79687836102"
	},
	{
		icon: <EmailIcon className="contact__icon" />,
		label: "Email",
		value: "info@treer.ru",
		link: "mailto:info@treer.ru"
	},
	{
		icon: <TelegramIcon className="contact__icon" />,
		label: "Telegram",
		value: "Написать",
		link: "https://t.me/79687836102"
	},
	{
		icon: <WhatsAppIcon className="contact__icon" />,
		label: "WhatsApp",
		value: "Написать",
		link: "https://wa.me/79687836102"
	}
];

export default function Contacts() {
	return (
		<section className="contacts" id="contact">
			<Container maxWidth="md">
				<Typography variant="h3" className="contacts__title">
					Свяжитесь с нами
				</Typography>
				<Typography variant="h6" className="contacts__subtitle">
					Обсудим ваш проект и предложим оптимальное решение
				</Typography>

				<Grid container spacing={3}>
					{contacts.map((contact, i) => (
						<Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
							<Link href={contact.link} underline="none">
								<Paper className="contact__card" elevation={2}>
									<Box className="contact__icon-wrapper">
										{contact.icon}
									</Box>
									<Typography className="contact__label">
										{contact.label}
									</Typography>
									<Typography className="contact__value">
										{contact.value}
									</Typography>
								</Paper>
							</Link>
						</Grid>
					))}
				</Grid>
			</Container>
		</section>
	);
}