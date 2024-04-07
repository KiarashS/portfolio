import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
// import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';
// import { RoughNotation } from 'react-rough-notation';

function Slides(): React.ReactElement {
  // const [randomColor] = useRandomColorPair();

  return (
    <>
      <PageSEO
        title={`Slides - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header title='Slides'
                subtitle="Some helpful slides to easily learn and review them" />
        <div className='container py-12 px-6'>
          {/* <p> */}
          <ul className="list-disc">
            <li className='mb-2'><a href='https://go.kiarashs.ir/regex' target='_blank' rel='noreferrer' className='text-blue-600 hover:text-blue-800'>Regular Expression (regex or regexp) for data scientists</a></li>
            <li className='mb-2'><a href='https://go.kiarashs.ir/cc' target='_blank' rel='noreferrer' className='text-blue-600 hover:text-blue-800'>Clean Code</a></li>
          </ul>
            {/* <span
              className='ml-2 cursor-pointer !font-normal !text-black !no-underline dark:!text-white'
              role='button'
              tabIndex={0}
            >
              <RoughNotation
                show
                type='underline'
                strokeWidth={2}
                animationDelay={250}
                animationDuration={2000}
                color={randomColor}
                multiline={true}
              >
                schedule a meeting
              </RoughNotation>
            </span> */}
          {/* </p> */}
        </div>
      </div>
    </>
  );
}

export default Slides;
