import { PageWrap } from "../../components/styled";
import Header from "../../components/header";
import RecipeListBody from "./Body";

function RecipeListPage() {
    return (
        <PageWrap>
            <Header />
            <RecipeListBody />
        </PageWrap>
    );
}

export default RecipeListPage;
