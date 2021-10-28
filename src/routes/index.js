import { BrowserRouter, Route, Switch } from "react-router-dom";
import RecipeListPage from "../pages/RecipeList";
import RecipeDetailPage from "../pages/RecipeDetail";

const RootRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* 기본 루트페이지 */}
                <Route path="/" component={RecipeListPage} exact key="List" />

                {/* 추가되는 페이지 */}
                <Route
                    path="/detail"
                    component={RecipeDetailPage}
                    exact
                    key="Detail"
                />
            </Switch>
        </BrowserRouter>
    );
};

export default RootRoute;
