import { AppBar, Toolbar, Link, Box } from "@mui/material";

import { useAddActiveClass } from "./useAddActiveClass";
import logo from "../../assets/logo.svg";
import "./header.css";

const sectionIds = ["intro", "services", "portfolio", "contact"];

export default function Header() {
	const activeId = useAddActiveClass(sectionIds);

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
