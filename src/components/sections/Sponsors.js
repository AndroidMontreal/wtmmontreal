'use client';
import PillButton from '@/components/elements/PillButton';
import SponsorCard from '@/components/elements/SponsorCard';
import SponsorLevelTitle from '@/components/elements/SponsorLevelTitle';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import { sponsors, sponsorLevels } from '@/data/sponsorsData';
import { generalLinks } from '@/data/generalLink';
import { v4 as uuidv4 } from 'uuid';

const Sponsors = () => {
  return (
    <div className="flex flex-col gap-6 text-center items-center justify-center my-10">
      <TitleWithSubtitle
        title="Our Sponsors"
        subTitle="Let's Make a Difference Together! Become Our Community Sponsor."
        titleClassName="max-w-4xl"
        subTitleClassName="max-w-xl" />

      {sponsorLevels.map(({ title, level }) => (
        <SponsorLevel key={uuidv4()} title={title} level={level} sponsors={sponsors} />
      ))}


      <PillButton
        href={ generalLinks.sponsorshipLink }
        label="Become a partner" />

    </div>

  );
};

const SponsorLevel = ({ title, level, sponsors }) => (
  <>
    <SponsorLevelTitle
      title={title}
      level={level}
      titleClassName="max-w-4xl"
    />
    <SponsorCard sponsors={sponsors.filter(checkSponsorshipLevel(level))} />
  </>
);

function checkSponsorshipLevel(level) {
  return function(partner) {
    return level === partner.level;
  };
}

export default Sponsors;
