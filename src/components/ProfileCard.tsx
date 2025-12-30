type ProfileCardData = {
    name: string;
    year: number;
    job: string;
}

const ProfileCard = (data : ProfileCardData) => {

    return (
        <div style={{border: '1px solid green', borderRadius: '8px', padding: '4px'}}>
            <p>Name : {data.name}</p>
            <p>Birth Year : {data.year}</p>
            <p>job : {data.job}</p>
        </div>
    )
}

export default ProfileCard;