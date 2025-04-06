import {
    useFloating,
    useInteractions,
    useDismiss,
    autoUpdate,
    offset,
    shift,
    FloatingPortal,
    useHover,
    useFocus,
    flip,
  } from "@floating-ui/react";
import { useState } from 'react';

import styles from './explanationIcon.module.scss';

export const ExplanationIcon = ({ explanation }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        placement: "top",
        onOpenChange: setIsOpen,
        whileElementsMounted: autoUpdate,
        middleware: [ 
          offset(5),
          shift(),
          flip()
        ]
      });

    const dismiss = useDismiss(context);
    const hover = useHover(context);
    const focus = useFocus(context);
    const { getReferenceProps, getFloatingProps } = useInteractions([
        dismiss,
        hover,
        focus,
    ]);
    
    return <>
        <span ref={refs.setReference} className="material-symbols-outlined" {...getReferenceProps()}>help</span>
        {
            isOpen && 
            <FloatingPortal>
                <div ref={refs.setFloating} className={styles.tooltip} style={floatingStyles} {...getFloatingProps()}>
                    {explanation}
                </div>
            </FloatingPortal>
        }
    </>;
};