/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";
import bannerImg from "../assets/me.png";
import aboutImg from "../assets/me-about.jpg";
import avtar1 from "../assets/avatar1.jpg";
import avtar2 from "../assets/avatar2.jpg";
import avtar3 from "../assets/avatar3.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareDribbble } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import port1 from "../assets/portfolio1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const home = () => {
	const aboutData = [
		{
			icons: <FaArrowTrendUp />,
			title: "Experience",
			subTitle: "2+ Years Working",
		},
		{
			icons: <FaArrowTrendUp />,
			title: "Clients",
			subTitle: "10+ Worldwide",
		},
		{
			icons: <FaArrowTrendUp />,
			title: "Projects",
			subTitle: "20+ Completed",
		},
	];

	const experienceData = {
		frontend: [
			{
				icons: <TiTick />,
				title: "HTML",
				subTitle: "Experienced",
			},
			{
				icons: <TiTick />,
				title: "CSS",
				subTitle: "Experienced",
			},
			{
				icons: <TiTick />,
				title: "JAVASCRIPT",
				subTitle: "Experienced",
			},
			{
				icons: <TiTick />,
				title: "BOOTSTRAP",
				subTitle: "Experienced",
			},
			{
				icons: <TiTick />,
				title: "REACTJS",
				subTitle: "Experienced",
			},
		],
		backend: [
			{
				icons: <TiTick />,
				title: "Mongodb",
				subTitle: "Experienced",
			},
			{
				icons: <TiTick />,
				title: "Nodejs",
				subTitle: "Experienced",
			},
			{
				icons: <TiTick />,
				title: "Express",
				subTitle: "Experienced",
			},
		],
	};

	const serviceData = {
		uiux: [
			{
				icons: <TiTick />,
				des: "orem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nam porro aliquid omnis ex dignissimos ex",
			},
			{
				icons: <TiTick />,
				des: "orem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nam porro aliquid omnis ex dignissimos ex",
			},
		],
		webDev: [
			{
				icons: <TiTick />,
				des: "orem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nam porro aliquid omnis ex dignissimos ex",
			},
			{
				icons: <TiTick />,
				des: "orem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nam porro aliquid omnis ex dignissimos ex",
			},
		],
		mislenious: [
			{
				icons: <TiTick />,
				des: "orem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nam porro aliquid omnis ex dignissimos ex",
			},
			{
				icons: <TiTick />,
				des: "orem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nam porro aliquid omnis ex dignissimos ex",
			},
		],
	};

	const portfolioData = [
		{
			image: port1,
			title: "Figma Dashboard & Financial Visualization",
		},
		{
			image: port1,
			title: "Figma Dashboard & Financial Visualization",
		},
		{
			image: port1,
			title: "Figma Dashboard & Financial Visualization",
		},
		{
			image: port1,
			title: "Figma Dashboard & Financial Visualization",
		},
		{
			image: port1,
			title: "Figma Dashboard & Financial Visualization",
		},
		{
			image: port1,
			title: "Figma Dashboard & Financial Visualization",
		},
	];

	const testimonialData = [
		{
			avtar: avtar1,
			name: "Samuel Loren",
			des: "	Lorem ipsum, dolor sit amet consectetur m ducimusis dolorn aliquid obcaecati consectetur.",
		},
		{
			avtar: avtar2,
			name: "Jemmy Sunns",
			des: "	Lorem ipsum, dolor sit amet consectetur m ducimusis dolorn aliquid obcaecati consectetur.",
		},
		{
			avtar: avtar3,
			name: "Pikka Duke",
			des: "	Lorem ipsum, dolor sit amet consectetur m ducimusis dolorn aliquid obcaecati consectetur.",
		},
	];
	return (
		<HomeWrapper>
			{/* <----------------------header section start---------------------> */}
			{/* <Header /> */}
			{/* <----------------------header section end---------------------> */}

			{/* <----------------------banner section start---------------------> */}
			<section className="banner-wrapper">
				<article>
					<small>HELLO, i am</small>
					<h1>Dheeraj Ojha</h1>
					<span>FrontEnd Developer</span>
				</article>

				<div className="buttons">
					<button className="cta">Download CV</button>
					<button className="cta-outline">Lets Talk</button>
				</div>

				<figure>
					<img src={bannerImg} alt="bannerimg" />
				</figure>

				<div className="socials">
					<Link to="/">
						<FaLinkedin />
					</Link>
					<Link to="/">
						<FaInstagramSquare />
					</Link>
					<Link to="/">
						<FaSquareDribbble />
					</Link>
					<Link to="/">&#8593;</Link>
				</div>

				<div className="scroll-down">
					<small>SCROLL DOWN</small>
				</div>
			</section>

			{/* <----------------------banner section end---------------------> */}

			{/* <----------------------About section start---------------------> */}
			<section className="about-wrapper">
				<div className="heading">
					<small>Get To Know</small>
					<h1>About Me</h1>
				</div>
				<div className="row">
					<div className="left">
						<figure>
							<img src={aboutImg} alt="" />
						</figure>
					</div>
					<div className="right">
						<div className="card-container">
							{aboutData.map((val, i) => {
								return (
									<div className="card" key={i}>
										<span>{val.icons}</span>
										<h3>{val.title}</h3>
										<small>{val.subTitle}</small>
									</div>
								);
							})}
						</div>
						<article>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, pariatur qui? Optio
								odio illo perspiciatis magni laboriosam placeat quos cumque, debitis, quidem, vero
								unde harum. Reprehenderit voluptas assumenda quod quos.
							</p>
							<button className="cta">Know more</button>
						</article>
					</div>
				</div>
			</section>

			{/* <----------------------About section end---------------------> */}

			{/* <----------------------Experience section start---------------------> */}
			<section className="experience-wrapper">
				<div className="heading">
					<small>What skills I Have</small>
					<h1>Experience</h1>
				</div>

				<div className="row">
					<div className="left">
						<h2>Frontend Development</h2>
						<ul>
							{experienceData.frontend.map((val, i) => {
								return (
									<li key={i} className="flex-ic">
										<span>{val.icons}</span>
										<div>
											<h3>{val.title}</h3>
											<small>{val.subTitle}</small>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="right">
						<h2>Frontend Development</h2>
						<ul>
							{experienceData.backend.map((val, i) => {
								return (
									<li key={i} className="flex-ic">
										<span>{val.icons}</span>
										<div>
											<h3>{val.title}</h3>
											<small>{val.subTitle}</small>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</section>

			{/* <----------------------Experience section end---------------------> */}

			{/* <----------------------Services section start---------------------> */}
			<section className="services-wrapper">
				<div className="heading">
					<small>What I Offer</small>
					<h1>Services</h1>
				</div>
				<div className="card-container">
					<div className="card">
						<h2>UI/UX Design Development</h2>
						<div className="card-body">
							<ul>
								{serviceData.uiux.map((val, i) => {
									return (
										<li key={i} className="flex">
											<span>{val.icons}</span>
											<p>{val.des}</p>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
					<div className="card">
						<h2>Web Development</h2>
						<div className="card-body">
							<ul>
								{serviceData.webDev.map((val, i) => {
									return (
										<li key={i} className="flex">
											<span>{val.icons}</span>
											<p>{val.des}</p>
										</li>
									);
								})}
							</ul>
						</div>
					</div>

					<div className="card">
						<h2>Mislenious</h2>
						<div className="card-body">
							<ul>
								{serviceData.mislenious.map((val, i) => {
									return (
										<li key={i} className="flex">
											<span>{val.icons}</span>
											<p>{val.des}</p>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* <----------------------Services section end---------------------> */}

			{/* <----------------------Portfolio section start---------------------> */}
			<section className="portfolio-wrapper">
				<div className="heading">
					<small>My Recent Work</small>
					<h1>Portfolio</h1>
				</div>

				<div className="card-container">
					{portfolioData.map((val, i) => {
						return (
							<div className="card" key={i}>
								<img src={val.image} alt="portfolio work" />
								<div className="card-body">
									<h3>{val.title}</h3>
								</div>
								<div className="card-footer flex-ic">
									<button className="cta">Github</button>
									<button className="cta-outline">Live Demo</button>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			{/* <----------------------Portfolio section end---------------------> */}

			{/* <----------------------Testiminial section start---------------------> */}
			<section className="testimonial-wrapper">
				<div className="heading">
					<small>What Our Client Says</small>
					<h1>Testimonial</h1>
				</div>

				<Swiper modules={[Pagination]} pagination={true} loop={true}>
					{testimonialData.map((val, i) => {
						return (
							<SwiperSlide key={i}>
								<figure>
									<img src={val.avtar} alt="" />
								</figure>
								<article>
									<h2>{val.name}</h2>
									<small>{val.des}</small>
								</article>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</section>

			{/* <----------------------Testmonial section end---------------------> */}

			{/* <----------------------Contact section start---------------------> */}
			<section className="contact-wrapper">
				<div className="heading">
					<small>Get In Touch</small>
					<h1>Contact</h1>
				</div>

				<div className="row">
					<div className="left">
						<div className="card">
							<span>
								<CiMail />
							</span>
							<h3>Email</h3>
							<small>mail@gmail.com</small>
							<br />
							<Link to="mailto:tennymike795@gmail.com">Send Message</Link>
						</div>
						<div className="card">
							<span>
								<FaWhatsapp />
							</span>
							<h3>whatsapp</h3>
							<small>whatsapp@whatsapp.com</small>
							<br />
							<Link to="https://api.whatsapp.com/send?phone=+918303283857">Send Message</Link>
						</div>
					</div>
					<div className="right">
						<form action="">
							<div className="form-group">
								<input type="text" placeholder="Your Full Name" />
							</div>
							<div className="form-group">
								<input type="email" placeholder="Your Email" />
							</div>
							<div className="form-group">
								<textarea placeholder="Your Full Name" />
							</div>

							<div className="button-group">
								<button className="cta">Send Message</button>
							</div>
						</form>
					</div>
				</div>
			</section>

			{/* <----------------------Contact section end---------------------> */}

			{/* <----------------------footer section start---------------------> */}
			<Footer />
			{/* <----------------------footer section end---------------------> */}
		</HomeWrapper>
	);
};

const HomeWrapper = styled.div`
	.banner-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 100vh;
		position: relative;
		.buttons {
			button {
				margin-top: 2rem;
				&:nth-child(1) {
					margin-right: 1rem;
				}
			}
		}
		figure {
			width: 22rem;
			height: 30rem;
			background: linear-gradient(var(--primaryColor), transparent);
			overflow: hidden;
			border-radius: 12rem 12rem 0 0;
			padding: 5rem 1.5rem 1.5rem 1.5rem;
			margin-top: 2rem;
			img {
				animation: scale 0.5s linear infinite;
			}
		}

		.socials {
			position: absolute;
			bottom: 0;
			left: 0;
			a {
				color: var(--primaryColor);
				display: block;
				&:nth-child(4) {
					cursor: auto;
				}
			}
		}

		.scroll-down {
			position: absolute;
			bottom: 0;
			right: 0;
			small {
				writing-mode: vertical-lr;
				color: var(--primaryColor);
				cursor: pointer;
			}
		}
	}

	.about-wrapper {
		.row {
			display: grid;
			grid-template-columns: 35% 50%;
			gap: 15%;
			.left {
				width: 100%;
				aspect-ratio: 1/1;
				border-radius: 2rem;
				background: linear-gradient(30deg, transparent, var(--primaryColor), transparent);
				figure {
					border-radius: 2rem;
					transform: rotate(10deg);
					overflow: hidden;
					transition: var(--transition);
					&:hover {
						transform: rotate(0deg);
					}
				}
			}
			.right {
				.card-container {
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					gap: 1rem;
					.card {
						background: var(--bgColorVariant);
						text-align: center;
						padding: 2rem;
						border-radius: 1rem;
						small {
							color: var(--lightColor);
						}
					}
				}
				article {
					p {
						margin: 2rem 0 2rem;
						color: var(--lightColor);
					}
				}
			}
		}
	}

	.experience-wrapper {
		.row {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
			.left,
			.right {
				background: var(--bgColorVariant);
				padding: 2rem;
				border-radius: 1rem;
				h2 {
					color: var(--primaryColor);
					margin-bottom: 1rem;
				}

				small {
					color: var(--lightColor);
				}
				span {
					background: var(--primaryColor);
					padding: 0.6rem;
					border-radius: 50%;
					font-size: 1rem;
					display: flex;
				}
			}
		}
	}

	.services-wrapper {
		.card-container {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 1rem;
			.card {
				background: var(--bgColorVariant);
				border: 1px solid var(--primaryColor);
				h2 {
					background: var(--primaryColor);
					border-radius: 0 0 1rem 1rem;
					text-align: center;
					width: 100%;
				}
				.card-body {
					padding: 2rem;
				}
			}
		}
	}

	.portfolio-wrapper {
		.card-container {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 1rem;
			.card {
				background: var(--bgColorVariant);
				padding: 1rem;
				border-radius: 1rem;
				.card-body {
					margin: 1rem 0;
				}
			}
		}
	}

	.testimonial-wrapper {
		.swiper {
			width: 40%;
			.swiper-slide {
				display: grid;
				place-items: center;
				text-align: center;
				background: linear-gradient(90deg, var(--primaryColor), transparent);
				padding: 2rem;
				border-radius: 0.5rem;
				transition: var(--transition);
				&:hover {
					background: transparent;
					border: 1px solid var(--primaryColor);
				}
				figure {
					width: 4rem;
					border-radius: 50%;
					border: 0.3rem solid var(--bgColorVariant);
					overflow: hidden;
				}
				article {
					margin: 1rem 0;
					small {
						color: var(--lightColor);
					}
				}
			}
		}
	}

	.contact-wrapper {
		.row {
			display: grid;
			grid-template-columns: 20% 70%;
			gap: 10%;
			.left {
				.card {
					background: var(--bgColorVariant);
					padding: 1rem;
					margin-bottom: 1rem;
					text-align: center;
					border-radius: 0.5rem;
					a,
					span {
						color: var(--primaryColor);
					}
				}
			}
			.right {
				.form-group {
					margin-bottom: 1rem;
					input,
					textarea {
						width: 100%;
						background: transparent;
						border: 1px solid var(--bgColorVariant);
						padding: 1rem;
						border-radius: 0.5rem;
					}
				}
			}
		}
	}

	/* ===================MEDIA QUERY(MEDIUM DEVICES)=================== */

	@media screen and (max-width: 1024px) {
		.banner-wrapper {
			height: 70vh;
			.socials,
			.scroll-down {
				display: none;
			}
		}
		.about-wrapper {
			.row {
				grid-template-columns: 1fr;
				margin-bottom: 5rem;
				.left {
					width: 50%;
					margin: auto;
				}
				.right {
					.card-container {
						.card {
							padding: 1rem;
						}
					}
				}
			}
		}

		.experience-wrapper {
			.row {
				grid-template-columns: 1fr;
			}
		}

		.services-wrapper {
			.card-container {
				grid-template-columns: repeat(2, 1fr);
			}
		}

		.portfolio-wrapper {
			.card-container {
				grid-template-columns: repeat(2, 1fr);
			}
		}

		.testimonial-wrapper {
			.swiper {
				width: 90%;
			}
		}

		.contact-wrapper {
			.row {
				grid-template-columns: 1fr;
			}
		}
	}

	/* ===================MEDIA QUERY(SMALL DEVICES)=================== */

	@media screen and (max-width: 600px) {
		.services-wrapper {
			.card-container {
				grid-template-columns: 1fr;
			}
		}

		.portfolio-wrapper {
			.card-container {
				grid-template-columns: 1fr;
			}
		}
	}
`;

export default home;
