import { SearchForm, SearchFormInput, SearchFormButton, SearchFormButtonLabel } from "./Movies.styled";
import css from './Movies.styles.module.css';
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchForWord } from "components/APIsResults/APIsResults";
import RenderFilmsList from "components/RenderFilmsList/RenderFilmsList";
import { useLocation } from "react-router-dom";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const paramsFofSearch = searchParams.size !== 0 ? searchParams.get("searchValue") : "";
    const [wordResult, setWordResult] = useState();
    const location = useLocation();
    const [inputValue, setInputValue] = useState(paramsFofSearch);

    useEffect(() => {
        if(paramsFofSearch === "") return;
        const searchReviewsFilms = async () => {
            try{
                const result = await searchForWord(paramsFofSearch);
                setWordResult(result);
            } catch (error) {
                console.error("Error:", error.message);
            };
        };
        searchReviewsFilms()
    }, [paramsFofSearch]);

    const forSubmit = (e) => {
        e.preventDefault();
        const dataForSearch = e.currentTarget.elements.search.value;
        setSearchParams({searchValue: dataForSearch});
    };

    const forInputValue = (e) => {
        const navInputValue = e.currentTarget.value;
        setInputValue(navInputValue);
        
    };

    return(
        <>
        <SearchForm onSubmit={forSubmit}>
        <SearchFormInput
        name='search'
        type="text"
        value={inputValue}
        onChange={forInputValue}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        />
        <SearchFormButton className={css.SearchButton} type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
        </SearchForm>
        {paramsFofSearch !== "" && <RenderFilmsList filmsList={wordResult} location={location}/>}
        </>
    )
};

export default Movies;