import Layout from "./components/layout";
import Profile from "./components/profile";
import {ResetCSS} from "./global/resetCSS";
import Repositories from "./components/repositories";
import GithubProvider from "./providers/github-provider";
import useGithub from "./hooks/github-hooks";

function App() {
    const githubState = useGithub()
    return (
        <main>
            <GithubProvider>
            <ResetCSS />
            <Layout>
                {githubState.loading ? (<p>loading...</p>) :
                    (<>
                        <Profile />
                        <Repositories />
                    </>)}
            </Layout>
            </GithubProvider>
        </main>
    );
}

export default App;
