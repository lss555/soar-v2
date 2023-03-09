import React, { useEffect, useState } from 'react';
import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { CardContainer, CardBody, CardImage, CardTitle, CardDescription, CardButton, BlogWrapper } from './blog-styles.js';
// BlogContainer, BlogHeader, BlogCardContainer, BlogCards, BlogCardImage, BlogPostedDate, BlogSneakPeakText, BlogPostTitle

function Card() {
const [allPostsData, setAllPosts] = useState(null);

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        body,
        publishedAt,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

	return (
		<div>
			{allPostsData &&
				allPostsData.map((post, index) => (
					<CardContainer key={post.slug.current}>
						<CardBody>
							<CardImage src={urlFor(post.mainImage.asset.url).width(1200).url()} alt="Blog post"/>
							<CardTitle>{post.title}</CardTitle>
							<CardDescription>add 1 to 2 sentence snippet about blog post</CardDescription>
							<CardButton>View Post</CardButton>
						</CardBody>
					</CardContainer>
					))}
		</div>
		)
}

const Blog = () => {
// const [allPostsData, setAllPosts] = useState(null);

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//   return builder.image(source);
// }

//   useEffect(() => {
//     sanityClient
//       .fetch(
//         `*[_type == "post"]{
//         title,
//         slug,
//         body,
//         publishedAt,
//         mainImage{
//           asset->{
//           _id,
//           url
//         }
//       }
//     }`
//       )
//       .then((data) => setAllPosts(data))
//       .catch(console.error);
//   }, []);

	return (
		<BlogWrapper>
			<Card />
		</BlogWrapper>
		)
}

export default Blog;

{/*<BlogContainer>
			<BlogHeader>SOAR Blog</BlogHeader>
			<BlogCards>
				{allPostsData &&
					allPostsData.map((post, index) => (
						<BlogCardContainer to={"/" + post.slug.current} key={post.slug.current}>
							<span key={index}>
								<BlogCardImage src={urlFor(post.mainImage.asset.url).width(1200).url()} alt="Blog post"/>
								<span>
									<BlogPostTitle>{post.title}</BlogPostTitle>
									<BlogPostedDate>{post.publishedAt}</BlogPostedDate>
									<BlogSneakPeakText>sneak peak text sneak peak text sneak peak text sneak peak text sneak peak text sneak peak text v sneak peak text sneak peak text v v vsneak peak text</BlogSneakPeakText>
								</span>
							</span>
						</BlogCardContainer>
						))}
				</BlogCards>
		</BlogContainer>*/}