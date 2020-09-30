import React from 'react'
import { BrowserRouter ,Switch , Route } from "react-router-dom"
import LoginPage from '../Screen/LoginPage.js'
import RegisterPage from '../Screen/RegisterPage.js'
import PostLists from '../Screen/PostLists.js'
import PostPage from '../Screen/PostPage.js'


export default function Router(){
    return(
        <BrowserRouter>
        <Switch>

            <Route exact path="/">
                <LoginPage />
            </Route>

            <Route exact path="/postlists">
                <PostLists />
            </Route>

            <Route exact path="/postpage">
                <PostPage />
            </Route>

            <Route exact path="/registerpage">
                <RegisterPage />
            </Route>
        
            <Route>
                <div>Erro 404</div>
            </Route>

        </Switch>
        </BrowserRouter>
    )
}