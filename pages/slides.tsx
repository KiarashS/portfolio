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
                subtitle="Here are some useful talks and slides to help you learn and review with ease" />
        <div className='container py-12 px-6'>
          {/* <p> */}
          <div className='p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex' role='alert'>
            <span className='flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3'>News</span>
            <span className='font-semibold mr-2 text-left flex-auto'>Please check out <a href='https://directory.kiarashs.ir/' target='_blank' rel='noreferrer' className='font-medium text-blue-600 dark:text-blue-500 hover:text-blue-800'>my directory</a> for awesome links and files also!</span>
          </div>
          <ul className="list-disc">
            <li className='mb-2'><a href='https://go.kiarashs.ir/ai-med' target='_blank' rel='noreferrer' className='font-medium text-blue-600 dark:text-blue-500 hover:text-blue-800'>AI in Medicine</a></li>
            <li className='mb-2'><a href='https://go.kiarashs.ir/regex' target='_blank' rel='noreferrer' className='font-medium text-blue-600 dark:text-blue-500 hover:text-blue-800'>Regular Expression (regex or regexp)</a></li>
            <li className='mb-2'><a href='https://go.kiarashs.ir/cc' target='_blank' rel='noreferrer' className='font-medium text-blue-600 dark:text-blue-500 hover:text-blue-800'>Clean Code</a></li>
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
