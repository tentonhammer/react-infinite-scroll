import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import NavLink from "./components/Nav/NavLink";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Main from "./components/Main";
import Posts from "./pages/Posts";

function App() {
    return (<Main>
        <Header>
            <Container>
                <Nav>
                    <NavLink>
                        Ссылка 1
                    </NavLink>
                    <NavLink>
                        Ссылка 2
                    </NavLink>
                </Nav>
            </Container>
        </Header>
        <Content>
            <Container>
                <Posts />
            </Container>
        </Content>
        <Footer id='footer'>Подвалсайта</Footer>
    </Main>)
}

export default App;
