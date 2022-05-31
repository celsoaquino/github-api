import * as S from './styled'
import useGithub from "../hooks/github-hooks";

function Profile() {

    const { githubState } = useGithub()

    return (
        <S.Wrapper>

            <S.WrapperImage src="https://avatars.githubusercontent.com/u/21125748?v=4" alt="avatar User"/>

            <S.WrapperInfoUser>
                <div>
                    <h1>{  }</h1>
                    <S.WrapperUserName>
                        <h3>Username:</h3>


                    </S.WrapperUserName>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Followers</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Followers</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Followers</h4>
                        <span>5</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}

export default Profile