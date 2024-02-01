import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
// import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair';
// import { RoughNotation } from 'react-rough-notation';

function Presentations(): React.ReactElement {
  // const [randomColor] = useRandomColorPair();

  return (
    <>
      <PageSEO
        title={`Presentations - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className='fade-in divide-y-2 divide-gray-100 dark:divide-gray-800'>
        <Header title='Presentations'
                subtitle="Some of my presentations and talks" />
        <div className='container py-12 px-6'>
          {/* <p> */}
          <ul className="list-disc">
            <li>Clean Code [Comming soon...]</li>
            <li>Regular Expressions for data scientists [Comming soon...]</li>
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

export default Presentations;
