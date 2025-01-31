import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import manWithHat from "../../src/assets/images/comunity-says.png"

const Data = [
	{
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, impedit. Nisi dolorem nihil, libero maiores modi minus sunt accusamus non quasi soluta illum voluptatem eaque animi voluptatum at fugit hic.",
		name: "Alex",
		role: "CEO"
	},
	{
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, impedit. Nisi dolorem nihil, libero maiores modi minus sunt accusamus non quasi soluta illum voluptatem eaque animi voluptatum at fugit hic.",
		name: "Alex",
		role: "CTO"
	},
	{
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, impedit. Nisi dolorem nihil, libero maiores modi minus sunt accusamus non quasi soluta illum voluptatem eaque animi voluptatum at fugit hic.",
		name: "Alex",
		role: "COO"
	},
	{
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, impedit. Nisi dolorem nihil, libero maiores modi minus sunt accusamus non quasi soluta illum voluptatem eaque animi voluptatum at fugit hic.",
		name: "Alex",
		role: "Project Lead"
	},
]

const Testimonials = () => {
	let sliderRef = useRef(null);
	const next = () => {
		sliderRef.slickNext();
	};
	const previous = () => {
		sliderRef.slickPrev();
	};

	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		centerMode: false,
		arrows: false,
		variableWidth: false,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	};
	return (
		<>
			<div className='container py-5'>
				<div className='section-textbox pb-2 d-flex justify-content-center'>
					<div className='d-flex justify-content-center'>
						<svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 640 512">
							<path fill="#24EE89" d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.8 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z" /></svg>
						<span className='text-white'>Testimonials</span>
					</div>
				</div>

				<div className='pb-4 section-text'>
					<p className='text-white text-center'>Voices of <span className='text-gradient'>Our Community</span></p>
				</div>
				<div>
					<div className='row'>
						<div className='col-md-6 text-center'>
							<img src={manWithHat} alt="" className='animate-left-right' />
						</div>
						<div className='col-md-6'>
							<div className="slider-container">
								<Slider ref={slider => {
									sliderRef = slider;
								}} {...settings}>
									{Data.map((ele, index) => {
										return (
											<div key={index} >
												<div className='d-flex bg-3238381 justify-content-center flex-column p-4'>
													<p className='text-white fs-20'>{ele.text}</p>
													<div className='d-flex justify-content-between px-4'>
														<div>
															<h3 className='text-white'>{ele.name}</h3>
															<p className='text-white fs-20'>{ele.role}</p>
														</div>
														<div className='quote-left'>
															<i className='fas fa-quote-left'></i>
														</div>
													</div>
												</div>
											</div>

										)
									})}
								</Slider>
								<div className='d-flex aling-itmes-center justify-content-center gap-3 pt-4'>
									<button className="btn btn-custom btn-circle" onClick={previous}>
										<i className="fa-solid fa-arrow-left"></i>
									</button>
									<button className="btn btn-custom btn-circle" onClick={next}>
										<i className="fa-solid fa-arrow-right"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

export default Testimonials