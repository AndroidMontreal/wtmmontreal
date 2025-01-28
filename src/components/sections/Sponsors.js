'use client';
import PillButton from '@/components/elements/PillButton';
import SponsorCard from '@/components/elements/SponsorCard';
import SponsorLevelTitle from '@/components/elements/SponsorLevelTitle';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
// import { sponsorLevels } from '@/data/sponsorsData';
import { v4 as uuidv4 } from 'uuid';
import { useTranslations } from 'next-intl';

const Sponsors = ({ sponsorsData }) => {
  const t = useTranslations('sponsor');

  const sponsorLevelWithUUIDs =
    t.raw('levels') &&
    t.raw('levels').map((sponsorLevels) => ({
      ...sponsorLevels,
      uuid: uuidv4(),
    }));

  const sponsorsWithUUIDs =
    t.raw('sponsors') &&
    t.raw('sponsors').map((sponsor) => ({
      ...sponsor,
      uuid: uuidv4(),
    }));

  return (
    <div className="flex flex-col gap-6 text-center items-center justify-center my-10">
      <TitleWithSubtitle
        title={t('title')}
        subTitle={t('description')}
        titleClassName="max-w-4xl"
        subTitleClassName="max-w-xl"
      />

      {sponsorLevelWithUUIDs.map(({ title, level }) => (
        <SponsorLevel
          key={uuidv4()}
          title={title}
          level={level}
          sponsors={sponsorsWithUUIDs}
        />
      ))}

      <PillButton href={t('buttonLink')} label={t('buttonText')} />
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
