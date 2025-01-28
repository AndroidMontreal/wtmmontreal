'use client';
import PartnerCard from '@/components/elements/PartnerCard';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import { useTranslations } from 'next-intl';
import { v4 as uuidv4 } from 'uuid';

const Partners = ({ communitiesData }) => {
  const t = useTranslations('partner');

  const partnersWithUUIDs =
    t.raw('partners') &&
    t.raw('partners').map((partner) => ({
      ...partner,
      uuid: uuidv4(),
    }));

  return (
    <div className="flex flex-col gap-6 text-center items-center justify-center my-10">
      <TitleWithSubtitle
        title={t('title')}
        subTitle={t('description')}
        titleClassName="max-w-xl"
        subTitleClassName="max-w-lg"
      />
      <PartnerCard partners={partnersWithUUIDs} />
    </div>
  );
};

export default Partners;
