
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import styles from './dots.module.scss';

const dotIds = new Array(3).fill(-1).map((_, i) => `dot-${i}`);

export const Dots = ({ id }) => {
    useGSAP(() => {
        gsap.from(`#${id}`, {
            translateY: 72,
            scale: '0',
            height: '0',
            duration: 0.3,
            ease: 'power1.out',
        });
        const timeline = gsap.timeline({ repeat: -1 });
        dotIds.forEach((dotId) => {
            timeline.to(`#${id}-${dotId}`, {
                translateY: -5,
                duration: 0.2,
            });
            timeline.to(`#${id}-${dotId}`, {
                translateY: 0,
                duration: 0.2,
            });
        });
        gsap.to(`#${id}`, {
            display: 'none',
            duration: 0.1,
        }).delay(0.8);
    }, {
        dependencies: [id],
        revertOnUpdate: false,
    });

    return <div id={id} className={styles.wrapper}>
        {dotIds.map((dotId) => <span key={dotId} id={`${id}-${dotId}`} className={styles.dot} />)}
    </div>
};