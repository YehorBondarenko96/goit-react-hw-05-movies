import { Container, Header, Main, Link } from "./SharedLayout.styled";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "components/Loader/Loader";

export const SharedLayout = () => {
    return(
        <Container>
            <Header>
                <nav>
                    <Link to="/" end>Home</Link>
                    <Link to="/movies">Movies</Link>
                </nav>
            </Header>
            <Main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </Main>
        </Container>
    )
}
