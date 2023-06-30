import TeamMember from "./TeamMember"

const Team = () => {

    return (
        <div className="team">
            <h1 className="title">Our Team</h1>
            <div className="teamBrace">
                <TeamMember />
                <TeamMember />
            </div>
        </div>
    )

}

export default Team