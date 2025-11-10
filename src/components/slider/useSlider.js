import { useRef } from "react"

export const useSlider = (totalSlides) => {
	const currentSlide = useRef(0);
	const containerRef = useRef(null);

	const onClickNext = () => {
		if (currentSlide.current < (totalSlides - 1)) {
			currentSlide.current += 1;
		}
		else {
			currentSlide.current = 0;
		}
		updateSlide();
	}

	const onClickPrev = () => {
		if (currentSlide.current > 0) {
			currentSlide.current -= 1;
		}
		else {
			currentSlide.current = totalSlides - 1;
		}
		updateSlide();
	}

	const updateSlide = () => {
		
		if (containerRef.current) {
			console.log("update", containerRef.current)
			const offset = -currentSlide.current * 100;
			containerRef.current.style.cssText = `transform: translateX(${offset}%); transition: transform 0.5s ease;`;
		}
	}

	return {onClickNext, onClickPrev, containerRef}
}