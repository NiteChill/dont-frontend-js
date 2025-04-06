import { useMemo } from 'react';
import styles from './errorPopup.module.scss';
import { getErrors } from '../api/mails';
import { forwardRef } from 'react';
import Button from './Button';
import { ExplanationIcon } from './explanationIcon';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useState } from 'react';
import { useCallback } from 'react';

const id = "error-popup";

export const ErrorPopup = forwardRef(({ onSubmit, style, ...rest }, ref) => {
    const [selectedErrors, setSelectedErrors] = useState([]);

    useGSAP(() => {
        gsap.from(`#${id}`, {
            opacity: '0',
            duration: 0.4,
            ease: 'power1.out',
        });
    });

    const errors = useMemo(() => getErrors(), []);

    const submit = () => {
        onSubmit(selectedErrors);
    };

    const toggleKey = useCallback((key) => {
        setSelectedErrors((prev) => {
            const newValue = prev.filter((k) => k !== key);
            return newValue.length === prev.length ? [...prev, key] : newValue;
        });
    }, []);

    return <div id={id} ref={ref} className={styles.popup} style={style} {...rest}>
        <h2>Veuillez sélectionner les raisons du signalement</h2>
        {errors.map(({ key, title, explanation }) => (
            <label key={key}>
                <input type="checkbox" checked={selectedErrors.includes(key)} onChange={() => toggleKey(key)} />
                {title}
                <ExplanationIcon explanation={explanation} />
            </label>
        ))}
        <Button icon="flag_check" className={styles.validateBtn} onClick={submit}>Valider</Button>
    </div>;
});