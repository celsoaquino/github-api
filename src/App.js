import Layout from "./components/layout";
import Profile from "./components/profile";
import {ResetCSS} from "./global/resetCSS";
import Repositories from "./components/repositories";
import GithubProvider from "./components/providers/github-provider";

function App() {
    return (
        <main>
            <GithubProvider />
            <ResetCSS />
            <Layout>
                <Profile />
                <Repositories />
            </Layout>
        </main>
    );
}

export default App;
