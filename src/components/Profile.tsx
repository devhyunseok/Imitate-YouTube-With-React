import React from 'react'

interface Props {
    name: String;
    job: String;
}

class Profile extends React.Component<Props> {
    render() {
        const { name, job } = this.props;

        return (
            <div style={{ marginTop: '56px'}}>
                <h1>YouTube</h1>
            </div>
        )
    }
}

export default Profile;
