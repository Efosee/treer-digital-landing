import { AppBar, Toolbar, Link, Box } from "@mui/material";
import React, { useEffect, useState } from "react";

import logo from "../../assets/logo.svg";
import "./header.css";

export default function Header() {
	const [activeId, setActiveId] = useState("intro");

	useEffect(() => {
		const sectionIds = ["intro", "services", "portfolio", "contact"];
		const sections = sectionIds
			.map((id) => document.getElementById(id))
			.filter((el) => el);

		if (sections.length === 0) return;

		let ticking = false;
		const getPageTop = (el) => el.getBoundingClientRect().top + window.scrollY;

		const updateActive = () => {
			const viewportAnchor = window.scrollY + window.innerHeight * 0.35; // 35% от верха окна
			let current = sections[0].id;
			for (const el of sections) {
				if (getPageTop(el) <= viewportAnchor) current = el.id;
			}
			setActiveId(current);
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					updateActive();
					ticking = false;
				});
				ticking = true;
			}
		};

		updateActive();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", updateActive);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", updateActive);
		};
	}, []);

	return (
		<AppBar position="fixed" elevation={2} color="transparent" className="header__appbar">
			<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
				<img src={logo} alt="logo" className="header__logo" />
				<Box>
					<Link href="#intro" className={activeId === "intro" ? "active" : undefined}>О нас</Link>
					<Link href="#services" className={activeId === "services" ? "active" : undefined}>Услуги</Link>
					<Link href="#portfolio" className={activeId === "portfolio" ? "active" : undefined}>Портфолио</Link>
					<Link href="#contact" className={activeId === "contact" ? "active" : undefined}>Контакты</Link>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
