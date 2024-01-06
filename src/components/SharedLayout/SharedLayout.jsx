import { Container, Header, Main, Link } from "./SharedLayout.styled";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

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
                <Suspense fallback={<div>Loading page...</div>}>
                    <Outlet />
                </Suspense>
            </Main>
        </Container>
    )
}
