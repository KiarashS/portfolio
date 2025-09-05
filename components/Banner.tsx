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
      <h1 className='text-3xl font-bold text-shadow-sm dark:text-white lg:text-5xl'>
        Hi, I am <span className='name-gradient'>{frontMatter.shortname}</span>
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
            multiline={true}
          >
            my blog
          </RoughNotation>
        </Link>
      </p>
      <p className='font-light mb-2 lg:text-xl'>
        Read more
        <Link className='ml-2 mr-2 font-normal text-black' href='https://profile.kiarashs.ir'>
          <RoughNotation
            show
            type='highlight'
            animationDelay={250}
            animationDuration={2000}
            color={profileColor}
            multiline={true}
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
            multiline={true}
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
            multiline={true}
          >
            contact me
          </RoughNotation>
        </Link>
      </p>
      {/* <p className='font-light lg:text-xl'>
        Download
        <Link className='ml-2 mr-2 font-normal text-black' href='https://go.kiarashs.ir/cv'>
          <RoughNotation
            show
            type='highlight'
            animationDelay={250}
            animationDuration={2000}
            color={cvColor}
            multiline={true}
          >
            my CV
          </RoughNotation>
        </Link>
      </p> */}
    </div>
  );
}

export default memo(Banner);
