import styled from 'styled-components';
import { Link } from "react-router-dom";

export const BlogContainer = styled.div`
	margin-top 120px;
`;

export const BlogHeader = styled.h1`
	margin-left: 2rem;
	margin-right: 2rem;
	height: 100px;
	line-height: 80px;
	border-bottom: 1px solid grey;
	
`;

export const BlogCardContainer = styled(Link)`
	display: flex;
	padding-right: 38px;
	padding-left: 38px;
	text-decoration: none;
	color: black;
	
`;

export const BlogCards = styled.div`
	display: flex;
	margin: 100px auto auto auto;
	padding-right: 1rem
	padding-left: 1rem;
	justify-content: center;

`;

export const BlogCardImage = styled.img`
	object-fit: cover;
	height: 456px;
	width: 361px;
`;

export const BlogPostedDate = styled.p`
	font-size: 12px;
`;

export const BlogSneakPeakText = styled.p`
	width: 361px;
`;

export const BlogPostTitle = styled.h2`
	margin-bottom: 0;
`;