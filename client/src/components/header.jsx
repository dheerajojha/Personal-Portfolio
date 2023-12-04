/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import { FaHome, FaUserAstronaut, FaBook } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
	const [active, setActive] = useState("#");
	return (
		<HeaderWrapper>
			<Link
				to="#"
				onClick={() => {
					setActive("#");
				}}
				className={active === "#" && "active"}
			>
				<FaHome />
			</Link>
			<Link
				to="#about"
				onClick={() => {
					setActive("#about");
				}}
				className={active === "#about" && "active"}
			>
				<FaUserAstronaut />
			</Link>
			<Link
				to="#experience"
				onClick={() => {
					setActive("#experience");
				}}
				className={active === "#experience" && "active"}
			>
				<MdWork />
			</Link>
			<Link
				to="#portfolio"
				onClick={() => {
					setActive("#portfolio");
				}}
				className={active === "#portfolio" && "active"}
			>
				<FaBook />
			</Link>
			<Link
				to="#contact"
				onClick={() => {
					setActive("#contact");
				}}
				className={active === "#contact" && "active"}
			>
				<IoIosMail />
			</Link>
		</HeaderWrapper>
	);
};
const HeaderWrapper = styled.header`
	backdrop-filter: blur(15px);
	padding: 0.7rem 1.7rem;
	width: max-content;
	display: block;
	border-radius: 3rem;
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	gap: 1rem;
	background: rgba(0, 0, 0, 0.3);
	a {
		color: var(--lightColor);
		background: transparent;
		font-size: 1.1rem;
		transition: var(--transition);
		padding: 0.6rem;
		border-radius: 50%;
		display: flex;
		&:hover {
			background: rgba(0, 0, 0, 0.3);
		}
		&.active {
			background: var(--bgColor);
			color: var(--whiteColor);
		}
	}
`;

export default Header;
