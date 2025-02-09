import { clsx } from '@/lib/utils';

const SmallTitle = ({ title, className }) => {
  return (
    <h3
      className={clsx(
        'md:text-4xl text-2xl leading-tight font-semibold text-gray-800 pt-6',
        className
      )}
    >
      {title}
    </h3>
  );
};

export default SmallTitle;
