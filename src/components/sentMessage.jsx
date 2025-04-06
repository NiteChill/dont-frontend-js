import { isAnswer } from '../helpers/nodes';
import { useMemo } from 'react';
import styles from './sentMessage.module.scss';
import { forwardRef } from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  shift,
  FloatingPortal,
} from '@floating-ui/react';
import mergeRefs from 'merge-refs';
import cn from 'classnames';
import { useInView } from 'react-intersection-observer';
import { Dots } from './dots';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const SentMessage = forwardRef(
  ({ nodeId, chart, showAdvice, anchorRef }, ref) => {
    useGSAP(() => {
      const isAnswerNode = isAnswer(nodeId);
      const animation = gsap.from(`#node-${nodeId}`, {
        // translateY: 72,
        // translateX: isAnswerNode ? 96 : -96,
        scale: '0',
        duration: 0.3,
        ease: 'power1.out',
      });
      if (!isAnswerNode) {
        animation.delay(1);
      }
    }, [nodeId]);

    const isAnswerNode = isAnswer(nodeId);
    const node = useMemo(
      () => (isAnswerNode ? chart.choices[nodeId] : chart.messages[nodeId]),
      [nodeId, chart]
    );

    const { ref: viewRef, inView } = useInView({ root: anchorRef.current });
    const { refs, floatingStyles } = useFloating({
      open: showAdvice && inView,
      placement: isAnswerNode ? 'left' : 'right',
      whileElementsMounted: autoUpdate,
      middleware: [offset(5), shift()],
    });

    return (
      <>
        <div
          id={isAnswerNode ? `node-${nodeId}` : undefined}
          ref={mergeRefs(ref, refs.setReference, viewRef)}
          className={cn({
            [styles.sentMessage]: isAnswerNode,
            [styles.receivedMessageWrapper]: !isAnswerNode,
          })}
        >
          {isAnswerNode ? (
            node.message
          ) : (
            <>
              <span className={styles.avatar}></span>
              <div style={{ position: 'relative' }}>
                <div
                  id={!isAnswerNode ? `node-${nodeId}` : undefined}
                  className={styles.receivedMessage}
                >
                  {node.message}
                </div>
                <Dots id={`dots-${nodeId}`} />
              </div>
            </>
          )}
        </div>
        <FloatingPortal>
          {showAdvice && (
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              className={cn(styles.advice, {
                [styles.display]: showAdvice && inView,
              })}
            >
              <span
                className={cn('material-symbols-outlined', styles.infoIcon)}
              >
                info
              </span>
              {node.advice}
            </div>
          )}
        </FloatingPortal>
      </>
    );
  }
);
