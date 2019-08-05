import React from 'react'

interface Props {
    name: String;
    job: String;
}

const profile: React.FC<Props> = ({name, job}: Props) => (
    <div>
        <h1>프로필</h1>
        <div>
            <b>이름 : </b>
            {name}
        </div>
        <div>
            <b>직업 : </b>
            {job}
        </div>
    </div>
);

export default profile;
