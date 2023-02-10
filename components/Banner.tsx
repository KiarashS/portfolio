import Link from '@/components/Link';
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';
import { memo } from 'react';
import { RoughNotation } from 'react-rough-notation';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';

interface BannerProps {
  frontMatter: AuthorFrontMatter;
}

function Banner(props: BannerProps): React.ReactElement {
  const { frontMatter } = props;
  const [blogColor, profileColor, cvColor, aboutColor, contactColor] = useRandomColorPair();

  return (
    <div className='fade-in banner flex flex-1 flex-col justify-center px-6 py-10 dark:text-white lg:px-10'>
      <h1 className='text-3xl font-bold dark:text-white lg:text-5xl'>
        Hi, I am {frontMatter.shortname}
      </h1>
      <p className='mt-2 mb-3 text-lg lg:my-4 lg:text-2xl'>
        {frontMatter.occupation}
      </p>
      <p className='font-light mb-2 lg:text-xl'>
        Technical articles in my professional life,
        <Link className='ml-2 mr-2 font-normal text-black' href='/blog'>
          <RoughNotation
            show
            type='highlight'
            animationDelay={250}
            animationDuration={2000}
            color={blogColor}
          >
            my blog
          </RoughNotation>
        </Link>
      </p>
      <p className='font-light mb-2 lg:text-xl'>
        Read more
        <Link className='ml-2 mr-2 font-normal text-black' href='https://www.kiarashs.ir'>
          <RoughNotation
            show
            type='highlight'
            animationDelay={250}
            animationDuration={2000}
            color={profileColor}
          >
            my profile
          </RoughNotation>
        </Link>
        ,
        <Link className='ml-2 mr-2 font-normal text-black' href='/about'>
          <RoughNotation
            show
            type='highlight'
            animationDelay={250}
            animationDuration={2000}
            color={aboutColor}
          >
            about me
          </RoughNotation>
        </Link>
        or
        <Link className='ml-2 font-normal text-black' href='/contact'>
          <RoughNotation
            show
            type='highlight'
            animationDelay={250}
            animationDuration={2000}
            color={contactColor}
          >
            contact me
          </RoughNotation>
        </Link>
      </p>
      <p className='font-light lg:text-xl'>
        Download
        <Link className='ml-2 mr-2 font-normal text-black' href='https://drive.google.com/uc?export=download&id=16tzJJoNP3vkURX1Oj5wmRCTIemtQ7Ksl'>
          <RoughNotation
            show
            type='highlight'
            animationDelay={250}
            animationDuration={2000}
            color={cvColor}
          >
            my CV
          </RoughNotation>
        </Link>
      </p>
    </div>
  );
}

export default memo(Banner);
