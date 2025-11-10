import { useState, useEffect } from "react";

const getElementViewTop = (element) => {
	return element.getBoundingClientRect().top + window.scrollY;
};

const getElementViewBottom = (element) => {
	return element.getBoundingClientRect().bottom + window.scrollY;
};

export const useAddActiveClass = (sectionIds) => {
	const [activeSectionId, setActiveSectionId] = useState(sectionIds[0]);

	useEffect(() => {
			let ticking = false;

			const updateActiveSection = () => {
					const sections = sectionIds
							.map((id) => document.getElementById(id))
							.filter((elem) => elem)
							.map(elem => [elem, getElementViewTop(elem), getElementViewBottom(elem)]); // [elem, topY, bottomY]

					const viewportAnchor = window.scrollY + window.innerHeight * 0.5;
					let current = sections[0]?.[0]?.id;
					
					for (const section of sections) {
							if (section[1] <= viewportAnchor && section[2] >= viewportAnchor) {
									current = section[0].id;
							}
					}
					setActiveSectionId(current);
			};

			const handleScroll = () => {
					if (!ticking) {
							window.requestAnimationFrame(() => {
									updateActiveSection();
									ticking = false;
							});
							ticking = true;
					}
			};

			updateActiveSection();
			document.addEventListener("scroll", handleScroll);

			return () => {
					document.removeEventListener("scroll", handleScroll);
			};
	}, [sectionIds]);

	return activeSectionId;
};