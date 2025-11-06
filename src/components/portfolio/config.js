import QR1 from "../../assets/portfolio/QR1.webp";
import QR2 from "../../assets/portfolio/QR2.webp";
import QR3 from "../../assets/portfolio/QR3.webp";
import QR4 from "../../assets/portfolio/QR4.webp";


// Импорт изображений Wildberries
import WB1 from "../../assets/portfolio/WB1.png";
import WB2 from "../../assets/portfolio/WB2.png";
import WB3 from "../../assets/portfolio/WB3.png";
import WB4 from "../../assets/portfolio/WB4.png";

// Импорт изображений складской системы
import WMS1 from "../../assets/portfolio/WMS1.png";
import WMS2 from "../../assets/portfolio/WMS2.png";
import WMS3 from "../../assets/portfolio/WMS3.png";
import WMS4 from "../../assets/portfolio/WMS4.png";
import WMS5 from "../../assets/portfolio/WMS5.png";

export const projects = [
	{
		title: "Система для автоматизации ресторанного бизнеса и QR-меню",
		desc: "Комплексная система электронного меню с онлайн-заказами и оплатой. Включает аналитику, управление столами, ролевую модель, интеграцию с принтерами для печати чеков и предчеков по разным кухням, программу лояльности и мультикухонный функционал.",
		tags: ["React", "Node.js", "PostgreSQL", "Payment Gateway", "QR-коды"],
		color: "#ff6b6b",
		images: [QR1, QR2, QR3, QR4]
	},
	{
		title: "Плагин для Wildberries",
		desc: "Инструмент автоматизации работы с маркетплейсом. Планировщик доставок товаров, аналитика продаж, управление остатками и оптимизация логистики для продавцов. Упрощает процесс управления товарами и повышает эффективность работы.",
		tags: ["Chrome Extension", "API Integration", "Analytics", "Logistics"],
		color: "#4ecdc4",
		images: [WB1, WB2, WB3, WB4]
	},
	{
		title: "Платформа найма персонала",
		desc: "HR-система нового поколения для поиска и найма сотрудников. Функционал включает размещение вакансий, фильтрацию резюме, систему откликов и коммуникацию между работодателями и соискателями. Интеллектуальный подбор кандидатов.",
		tags: ["Vue.js", "Django", "ML Matching", "HR Tech"],
		color: "#95e1d3",
		images: [
			"https://placehold.co/600x400/95e1d3/white?text=Job+Board",
			"https://placehold.co/600x400/a5e6d8/white?text=Resume+Filter",
			"https://placehold.co/600x400/b5ebdd/white?text=Matching+System"
		]
	},
	{
		title: "Система управления складом (СУС)",
		desc: "Комплексное решение для управления складом с модулями продаж и глубокой аналитики. Учет товародвижения, автоматизация поставок, формирование отчетности и интеграция с 1С. Полный контроль над складскими операциями.",
		tags: ["WMS", "СУС", "Warehouse Management System"],
		color: "#f38181",
		images: [WMS1, WMS2, WMS3, WMS4, WMS5]
	},
];