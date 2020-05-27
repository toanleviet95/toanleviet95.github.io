import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import PrintButton from 'components/PrintButton';
import Header from 'components//Header';
import Summary from 'components/Summary';
import Card from 'components/Card';
import Contact from 'components/Contact';
import Education from 'components/Education';
import Interest from 'components/Interest';
import Award from 'components/Award';
import Working from 'components/Working';
import Skills from 'components/Skills';
import PetProjects from 'components/PetProjects';

import theme from 'constants/constants.styled';
import StyledGlobal from './Page.styled';

const Page = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    copyStyles: true,
  });
  
  return (
    <>
      <div className='text-center my-8'>
        <PrintButton onPrint={handlePrint} />
      </div>
      <div ref={componentRef}>
        <StyledGlobal theme={theme} />
        <section className='about'>
          <section className='wrapper about-me'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='col-span-3'>
                <Header text={'{ Le Viet Toan }'} />
              </div>
              <div className='col-span-2'>
                <Summary />
              </div>
              <div className='col-span-1 flex'>
                <Card>
                  <Contact />
                </Card>
              </div>
              <div className='col-span-3'>
                <Card>
                  <Working />
                </Card>
              </div>
            </div>
          </section>
        </section>
        <section className='about mt-8'>
          <section className='wrapper about-me'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='col-span-3'>
                <Card>
                  <PetProjects />
                </Card>
              </div>
              <div className='col-span-2'>
                <div className='mb-4'>
                  <Card>
                    <Skills />
                  </Card>
                </div>
                <div>
                  <Card>
                    <Award />
                  </Card>
                </div>
              </div>
              <div className='col-span-1 flex'>
                <Card>
                  <div className='mt-4'>
                    <Education />
                  </div>
                  <div className='mt-4 mb-4'>
                    <Interest />
                  </div>
                </Card>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
);
};

export default Page;
