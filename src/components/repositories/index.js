import * as S from './styled'
import RepositoryItem from "../repository-item";

function Repositories() {
    return(
        <S.WrapperTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem
                    name="repo 1"
                    linkToRepo="https://github.com/celsoaquino/agendalive-master"
                    fullName="celso"
                />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepositoryItem
                    name="repo 2"
                    linkToRepo="https://github.com/celsoaquino/agendalive-master"
                    fullName="celso"
                />
            </S.WrapperTabPanel>
        </S.WrapperTabs>
    )
}

export default Repositories