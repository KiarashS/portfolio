import SocialIcons from '@/components/SocialIcons';
import { memo } from 'react';
import Link from '@/components/Link';

function Footer(): React.ReactElement {
  const year: number = new Date().getFullYear();

  return (
    <div className='mt-4 flex flex-col items-center py-8 font-light dark:text-white lg:py-8'>
      <SocialIcons />
      <span className='mt-4 text-xs font-light lg:mt-8'>
        &copy; {year} Kiarash Soleimanzadeh
      </span>
      <div className="text-xs font-light mt-2 underline">
        <Link href='https://directory.kiarashs.ir'>My Directory</Link>
      </div>
    </div>
  );
}

export default memo(Footer);
