/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const footer = () => {
	return (
		<FooterWrapper>
			<ul className="menu-list">
				<li>
					<Link to="#home">Home</Link>
				</li>
				<li>
					<Link to="#about">About</Link>
				</li>
				<li>
					<Link to="#experience">Experience</Link>
				</li>
				<li>
					<Link to="#services">Services</Link>
				</li>
				<li>
					<Link to="#portfolio">Portfolio</Link>
				</li>
				<li>
					<Link to="#testimonial">Testimonial</Link>
				</li>
			</ul>

			<div className="socials">
				<Link to="">
					<FaLinkedinIn />
				</Link>
				<Link to="">
					<FaInstagram />
				</Link>
				<Link to="">
					<FaTwitter />
				</Link>
			</div>

			<div className="copyright">
				<p>&#169;Dheeraj 2023 All Right Reserved</p>
			</div>
		</FooterWrapper>
	);
};

const FooterWrapper = styled.footer`
	display: grid;
	place-items: center;
	background: var(--primaryColor);
	padding: 2rem 3rem;
	margin-top: 5rem;
	color: var(--bgColor);
	.menu-list {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		align-items: center;
		justify-content: center;
		a {
			color: var(--bgColor);
		}
	}

	.socials {
		margin: 2rem 0;
		display: flex;
		justify-content: center;
		gap: 1rem;
		a {
			background: var(--bgColor);
			color: var(--whiteColor);
			padding: 0.8em;
			border-radius: 0.5rem;
			display: flex;
		}
	}

	/* ===================MEDIA QUERY(MEDIUM DEVICES)=================== */

	@media screen and (max-width: 1024px) {
	}

	/* ===================MEDIA QUERY(SMALL DEVICES)=================== */

	@media screen and (max-width: 600px) {
		.menu-list {
			flex-direction: column;
		}
	}
`;

export default footer;
