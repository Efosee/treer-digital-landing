import { useSlider } from './useSlider';
import './slider.css';

export const Slider = ({ imgSrcs, onOpen }) => {
	const { onClickNext, onClickPrev, containerRef } = useSlider(imgSrcs.length);

	const handlePrevClick = (event) => {
		event.stopPropagation();
		onClickPrev();
	};

	const handleNextClick = (event) => {
		event.stopPropagation();
		onClickNext();
	};

	const handleRootClick = () => {
		if (onOpen) {
			onOpen();
		}
	};

	return (
		<div className="slider" onClick={handleRootClick}>
			<div className="slider__content">
				<div className="slider__container" ref={containerRef}>
					{imgSrcs.map((src, i) => (
						<div className="slider__img" key={src}>
							<img src={src} alt={`screenshot-${i}`} />
						</div>
					))}
				</div>
			</div>
			<div className="slider__controls">
				<button className="prev" id="slider-control-prev" onClick={handlePrevClick}>
					{"<-"}
				</button>
				<button className="next" id="slider-control-next" onClick={handleNextClick}>
					{"->"}
				</button>
			</div>
		</div>
	);
};
