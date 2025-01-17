'use client';
import CommunityCard from '@/components/elements/CommunityCard';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import { communities, communitiesData } from '@/data/communitiesData';

const Communities = ({ communitiesData }) => {
  return (
    <div className="flex flex-col gap-6 text-center items-center justify-center my-10">
      <TitleWithSubtitle
        title={communitiesData.title}
        subTitle={communitiesData.description}
        titleClassName="max-w-xl"
        subTitleClassName="max-w-lg"
      />
      <CommunityCard communities={communitiesData.communities} />
    </div>
  );
};

export default Communities;
