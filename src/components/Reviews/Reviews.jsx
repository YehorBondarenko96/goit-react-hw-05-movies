import { useState, useEffect } from "react";
import { ContainerReviews, ListReviews } from "./Reviews.styled";
import { searchForReviews } from "components/APIsResults/APIsResults";
import { useParams } from "react-router-dom";
import { Loader } from "components/Loader/Loader";

const Reviews = () => {
    const [reviewsResult, setReviewsResult] = useState(null);
    const [indicatorLoader, setIndicatorLoader] = useState(true);
    const { movieId } = useParams();

    useEffect(() => {
        const searchReviewsFilms = async () => {
            try{
                const result = await searchForReviews(movieId);
                setReviewsResult(result);
                console.log('result: ', result);
            } catch (error) {
                console.error("Error:", error.message);
            };
            setIndicatorLoader(false)
        };
        searchReviewsFilms()
    }, [movieId]);

    return(
        <ContainerReviews>
            {indicatorLoader ? (
            <Loader />) : (
                reviewsResult && 
                    reviewsResult.length > 0 ? (
                        <ListReviews>
                            {reviewsResult.map(post => 
                            <li key={post.id}>
                                <h3>{post.author}</h3>
                                <p>{post.content}</p>
                            </li>)}
                        </ListReviews>
                    ) : (
                        <p>We don't have any reviews for this movie</p>
                    )
            )}
        </ContainerReviews>
    )
};

export default Reviews;