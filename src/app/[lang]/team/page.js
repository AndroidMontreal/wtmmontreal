'use client';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import SmallTitle from '@/components/elements/SmallTitle';
import TeamMemberCard from '@/components/elements/TeamMemberCard';
import { sortTeamByFirstName } from '@/lib/utils';
import { sortByYearAndFirstName } from '@/lib/utils';
import { v4 as uuidv4 } from 'uuid';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('team');

  // error check for data
  const organizerWithUUIDs = Array.isArray(t.raw('organizer.organizers'))
    ? t.raw('organizer.organizers').map((organizer) => ({
        ...organizer,
        uuid: uuidv4(),
      }))
    : [];

  // sort method for organizer by name
  const sortedOrganizers = sortByYearAndFirstName(organizerWithUUIDs); // Use the imported function
  // error check for data
  const volunteerWithUUIDs = Array.isArray(t.raw('volunteer.volunteers'))
    ? t.raw('volunteer.volunteers').map((volunteer) => ({
        ...volunteer,
        uuid: uuidv4(),
      }))
    : [];
  // sort method for volunteer by name
  const sortedVolunteers = sortTeamByFirstName(volunteerWithUUIDs);

  return (
    <div
      id="speakers"
      className="flex flex-col gap-6 text-center items-center justify-center my-24"
    >
      <TitleWithSubtitle
        title={t('title')}
        subTitle={t('description')}
        titleClassName="max-w-2xl"
        subTitleClassName="max-w-xl"
      />

      <SmallTitle title={t('organizer.title')} />

      <ul className=" py-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-7xl mx-auto">
        {sortedOrganizers.map((member) => (
          <li key={member.uuid} className="flex items-start">
            <TeamMemberCard member={member} />
          </li>
        ))}
      </ul>

      <SmallTitle title={t('volunteer.title')} />

      <ul className="py-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-7xl mx-auto">
        {sortedVolunteers.map((member) => (
          <li key={member.uuid} className="flex items-start">
            <TeamMemberCard member={member} />
          </li>
        ))}
      </ul>
    </div>
  );
}
