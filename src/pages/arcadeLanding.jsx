import { useGSAP } from '@gsap/react';
import styles from './arcadeLanding.module.scss';
import gsap from 'gsap';

import { AwesomeButton } from '@dolaanpls/react-awesome-button';
import '@dolaanpls/react-awesome-button/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import { GameKeys } from '../constants/games';
import { useState } from 'react';
import { useRef } from 'react';

export const ArcadeLanding = () => {
  const [isComplete, setIsComplete] = useState(false),
  container = useRef(),
  { contextSafe } = useGSAP({scope: container}),
  navigate = useNavigate(),
  handleHover = contextSafe((inside) => {
    gsap.to('#leftLogo', {
      width: inside ? '270px' : '185px',
      ease: 'power1.inOut',
      duration: 0.6,
      delay: inside ? 0 : 0.3,
    })
    gsap.to('#rightLogo', {
      width: inside ? '423px' : '335px',
      ease: 'power1.inOut',
      duration: 0.6,
      delay: inside ? 0 : 0.3,
    })
  })

  useGSAP(() => {
    gsap.set('#leftLogo', {
      width: '185px',
    });
    gsap.set('#rightLogo', {
      width: '335px',
    });
    gsap
      .timeline({
        defaults: {
          ease: 'power1.inOut',
          delay: 0,
        },
        onComplete: () => setIsComplete(true)
      })
      .add('1')
      .to(
        '#leftLogo',
        {
          width: '270px',
          duration: 0.8,
          ease: 'circ',
        },
        '1'
      )
      .to(
        '#rightLogo',
        {
          width: '423px',
          duration: 2,
          ease: 'circ',
        },
        '1'
      ).add('2').to('#leftLogo', {
        width: '185px',
        duration: 0.5
      }, '2').to('#rightLogo', {
        width: '335px',
        duration: 0.5
      }, '2')
  });
  return (
    <div className={styles.arcadeLanding} ref={container}>
      <div style={{display: 'contents'}} onMouseEnter={() => isComplete && handleHover(true)} onMouseLeave={() => isComplete && handleHover(false)}>
      <AwesomeButton onMouseUp={() => setTimeout(() => navigate(`/${GameKeys.Chat}`), 250)} on>
        <div
          className={styles.logoContainer}
        >
          <div id='leftLogo'>
            <svg
              height='100%'
              viewBox='0 0 58 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              style={{
                marginRight: '-10px',
              }}
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M16.8 0.32C15.42 0.1 13.86 0 12.16 0H0V16.84H12.2C14.24 16.84 16.06 16.68 17.64 16.32C19.22 15.96 20.46 15.52 21.38 15C22.3 14.48 23.06 13.84 23.64 13.08C24.24 12.32 24.62 11.6 24.82 10.9C25.02 10.2 25.12 9.46 25.12 8.66V7.98C25.12 7.3 25.04 6.66 24.88 6.06C24.72 5.46 24.46 4.86 24.12 4.24C23.78 3.62 23.28 3.08 22.62 2.58C21.96 2.08 21.18 1.64 20.26 1.24C19.34 0.84 18.18 0.54 16.8 0.32ZM11.72 12.78H5.76V3.98H11.72C16.64 3.98 19.1 5.42 19.1 8.3V8.44C19.1 11.34 16.64 12.78 11.72 12.78ZM57.76 3.94H38.14C33.72 3.94 31.5 5.38 31.5 8.24V8.5C31.5 9.02 31.6 9.52 31.78 10C31.96 10.46 32.28 10.92 32.72 11.4C33.16 11.86 33.84 12.24 34.76 12.52C35.7 12.8 36.82 12.94 38.14 12.94H57.76V16.92H37.68C36.26 16.92 34.94 16.82 33.78 16.6C32.6 16.4 31.62 16.14 30.84 15.8C30.06 15.48 29.36 15.08 28.78 14.6C28.18 14.12 27.72 13.64 27.38 13.16C27.06 12.7 26.78 12.18 26.58 11.6C26.38 11.04 26.26 10.54 26.2 10.1C26.14 9.66 26.12 9.2 26.12 8.74V8.08C26.12 7.6 26.14 7.14 26.2 6.7C26.26 6.28 26.38 5.78 26.58 5.22C26.78 4.64 27.06 4.14 27.38 3.66C27.72 3.2 28.18 2.72 28.76 2.26C29.36 1.78 30.04 1.4 30.82 1.06C31.62 0.74 32.6 0.48 33.78 0.28C34.94 0.08 36.26 0 37.68 0H57.76V3.94Z'
                fill='#E2E2E2'
              />
            </svg>
          </div>
          <div id='rightLogo'>
            <svg
              height='100%'
              viewBox='0 0 91 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              style={{
                marginLeft: '-10px',
              }}
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M27.04 8.5V8.24C27.04 5.38 24.82 3.94 20.4 3.94H0.76001V0H20.86C22.28 0 23.6 0.0800002 24.76 0.28C25.94 0.48 26.92 0.74 27.72 1.06C28.5 1.4 29.18 1.78 29.78 2.26C30.36 2.72 30.82 3.2 31.16 3.66C31.48 4.14 31.76 4.64 31.96 5.22C32.16 5.78 32.28 6.28 32.34 6.7C32.4 7.14 32.42 7.6 32.42 8.08V8.74C32.42 9.2 32.4 9.66 32.34 10.1C32.28 10.54 32.16 11.04 31.96 11.6C31.76 12.18 31.48 12.7 31.16 13.16C30.82 13.64 30.36 14.12 29.76 14.6C29.18 15.08 28.48 15.48 27.7 15.8C26.92 16.14 25.94 16.4 24.76 16.6C23.6 16.82 22.28 16.92 20.86 16.92H0.76001V12.94H20.4C21.72 12.94 22.84 12.8 23.78 12.52C24.7 12.24 25.38 11.86 25.82 11.4C26.26 10.92 26.58 10.46 26.76 10C26.94 9.52 27.04 9.02 27.04 8.5ZM52.5 10.56L40.82 0H34.42V16.78H40.08V5.66L52.5 16.78H58.16V0H52.5V10.56ZM62.36 2.92L60.16 0H64.94L66.8 2.92H62.36ZM68.8 3.98H76.66V16.8H82.44V3.98H90.34V0H68.8V3.98Z'
                fill='#E2E2E2'
              />
            </svg>
          </div>
        </div>
      </AwesomeButton>
      </div>
    </div>
  );
};
