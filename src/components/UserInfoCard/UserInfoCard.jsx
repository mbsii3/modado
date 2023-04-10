export default function UserInfoCard({user}) {
    return (
        <>
            <div>
                <div>
                    {user.firstName} {user.lastName}
                </div>
                <div>
                    @{user.userName}
                </div>
                <div>
                    {user.location}
                </div>
                <div>
                    {user.occupation}
                </div>
            </div>
        </>
    );
}