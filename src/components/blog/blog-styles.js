import styled from 'styled-components';
// import { Link } from "react-router-dom";

// export const BlogContainer = styled.div`
// 	margin-top 120px;

// `;

// export const BlogHeader = styled.h1`
// 	margin-left: 2rem;
// 	margin-right: 2rem;
// 	height: 100px;
// 	line-height: 80px;
// 	border-bottom: 1px solid grey;
	
// `;

// export const BlogCardContainer = styled(Link)`
// 	display: flex;
// 	padding-right: 38px;
// 	padding-left: 38px;
// 	text-decoration: none;
// 	color: black;
// 	height: 100%;
// 	border: 3px solid red;

// `;

// export const BlogCards = styled.div`
// 	margin: 100px auto auto auto;
// 	padding-right: 1rem
// 	padding-left: 1rem;
// 	max-width: 2000px;
// 	-webkit-column-count: 3;
// 	-moz-column-count: 3;
// 	column-count: 3;
// 	-webkit-column-width: 33%;
// 	-moz-column-width: 33%;
// 	column-width: 33%;
// 	margin-left: auto;
// 	margin-right: auto;
// 	width: 100%;
	
// `;

// export const BlogCardImage = styled.img`
// 	object-fit: cover;
// 	height: 456px;
// 	width: 361px;
// `;

// export const BlogPostedDate = styled.p`
// 	font-size: 12px;
// `;

// export const BlogSneakPeakText = styled.p`
// 	width: 361px;

// `;

// export const BlogPostTitle = styled.h2`
// 	margin-bottom: 0;
// `;

// New Card

export const CardContainer = styled.div`
	overflow: hidden;
	box-shadow: 0 2px 20px gray;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	cursor: pointer;
	justify-content: space-between;
	transition: transform 200ms ease-in;
`;

export const CardBody = styled.div`
	margin: 2rem;
`;

export const CardImage = styled.img`
	object-fit: cover;
	height: 456px;
	width: 361px;
`;

export const CardTitle = styled.h2`

`;

export const CardDescription = styled.p`

`;

export const BlogWrapper = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 2rem;
	justify-content: center;
`;

export const CardButton = styled.button`

`;