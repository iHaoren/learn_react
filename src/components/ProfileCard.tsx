type ProfileCardData = {
    name: string;
    age: number;
    year: number;
}

const ProfileCard = (data : ProfileCardData) => {

    return (
        <div style={{border: '1px solid green', borderRadius: '8px', padding: '4px'}}>
            <p>Name : {data.name}</p>
            <p>Age : {data.age}</p>
            <p>Birth Year : {data.year}</p>
        </div>
    )
}

export default ProfileCard;