import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import SmallTitle from '@/components/elements/SmallTitle';
import { teamData } from '@/data/teamData';
import { volunteersData } from '@/data/volunteersData';
import TeamMemberCard from '@/components/elements/TeamMemberCard';
import { sortTeamByFirstName } from '@/lib/utils';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const sortedTeam = sortTeamByFirstName(teamData.teams); // Use the imported function
  const sortedVolunteers = sortTeamByFirstName(volunteersData.volunteers);

  return (
    <div
      id="speakers"
      className="flex flex-col gap-6 text-center items-center justify-center my-24"
    >
      <TitleWithSubtitle
        title={teamData.title}
        subTitle={teamData.description}
        titleClassName="max-w-2xl"
        subTitleClassName="max-w-xl"
      />

      <SmallTitle
        title="Organizers"
        
      />

      <ul className=" py-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {sortedTeam.map((member) => (
          <li key={uuidv4()} className="flex items-start">
            <TeamMemberCard member={member} />
          </li>
        ))}
      </ul>


    </div>
  );
}
