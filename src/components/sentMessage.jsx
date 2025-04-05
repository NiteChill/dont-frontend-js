import { isAnswer } from '../helpers/nodes';
import { useMemo } from 'react';
import styles from './sentMessage.module.scss';
import { forwardRef } from 'react';
import {
    useFloating,
    autoUpdate,
    offset,
    shift,
    FloatingPortal
  } from "@floating-ui/react";
import mergeRefs from 'merge-refs';
import cn from 'classnames';
import { useInView } from "react-intersection-observer";

export const SentMessage = forwardRef(({ nodeId, chart, showAdvice, anchorRef }, ref) => {
    const isAnswerNode = isAnswer(nodeId);
    const node = useMemo(() => isAnswerNode ? chart.choices[nodeId] : chart.messages[nodeId], [nodeId, chart]);

    const { ref: viewRef, inView } = useInView({ root: anchorRef.current });
    const { refs, floatingStyles } = useFloating({
        open: showAdvice && inView,
        placement: isAnswerNode ? "left" : "right",
        whileElementsMounted: autoUpdate,
        middleware: [ 
          offset(5),
          shift()
        ]
      });
  
    return <>
        <div ref={mergeRefs(ref, refs.setReference, viewRef)} className={cn({ [styles.sentMessage]: isAnswerNode, [styles.receivedMessageWrapper]: !isAnswerNode })}>
            {isAnswerNode ? node.message : (
                <>
                    <span className={styles.avatar}></span>
                    <div className={styles.receivedMessage}>
                    {node.message}
                    </div>
                </>
            )}
        </div>
        <FloatingPortal>
            {
                showAdvice && 
                    <div
                        ref={refs.setFloating}
                        style={floatingStyles}
                        className={cn(styles.advice, { [styles.display]: showAdvice && inView  })}
                    >
                        <span className={cn("material-symbols-outlined", styles.infoIcon)}>
                            info
                        </span>
                        {node.advice}
                    </div>
            }
        </FloatingPortal>
    </>;
});