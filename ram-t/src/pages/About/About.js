import React from 'react';
import { Container, Row, } from 'reactstrap';
import { memberData, teamData } from "./teamInfo";
import AboutCard from "./AboutCard";
import { TeamCardsStyle, TeamCardStyle, MemberCardsStyle, MemberCardStyle } from './AboutStyles'

export default function About() {
    return (
        <Container>
            <TeamCard />
            <MemberCards />
        </Container>
    );
}

function TeamCard() {
    return (
        <div style={TeamCardsStyle}>
            <Row>
                <div style={TeamCardStyle}>
                    <AboutCard
                        title={teamData.teamName}
                        text={teamData.missionStatement}
                        pic={teamData.imagePath}
                        team
                    />
                </div>
            </Row>
        </div>
    );
}

function MemberCards() {
    return (
        <div style={MemberCardsStyle}>
            <Row>
                {memberData.map(member =>
                    <div style={MemberCardStyle}>
                        <AboutCard
                            key={member.name}
                            title={member.name}
                            text={member.bio}
                            subTitle={member.homeTown}
                            pic={member.imagePath}
                        />
                    </div>
                )}
            </Row>
        </div>
    );
}