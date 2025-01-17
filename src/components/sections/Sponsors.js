'use client';
import PillButton from '@/components/elements/PillButton';
import SponsorCard from '@/components/elements/SponsorCard';
import SponsorLevelTitle from '@/components/elements/SponsorLevelTitle';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import { sponsors, sponsorLevels } from '@/data/sponsorsData';
import { generalLinks } from '@/data/generalLink';
import { v4 as uuidv4 } from 'uuid';

const Sponsors = ({ sponsorsData }) => {
  return (
    <div className="flex flex-col gap-6 text-center items-center justify-center my-10">
      <TitleWithSubtitle
        title={sponsorsData.title}
        subTitle={sponsorsData.description}
        titleClassName="max-w-4xl"
        subTitleClassName="max-w-xl"
      />

      {sponsorLevels.map(({ title, level }) => (
        <SponsorLevel
          key={uuidv4()}
          title={title}
          level={level}
          sponsors={sponsorsData.sponsors}
        />
      ))}

      <PillButton
        href={sponsorsData.buttonLink}
        label={sponsorsData.buttonText}
      />
    </div>
  );
};

const SponsorLevel = ({ title, level, sponsors }) => (
  <>
    <SponsorLevelTitle title={title} level={level} titleClassName="max-w-4xl" />
    <SponsorCard sponsors={sponsors.filter(checkSponsorshipLevel(level))} />
  </>
);

function checkSponsorshipLevel(level) {
  return function (partner) {
    return level === partner.level;
  };
}

export default Sponsors;
