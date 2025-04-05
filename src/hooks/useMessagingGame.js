import { getFlowchart } from '../api/getFlowchart';
import { useState, useMemo, useCallback, useRef } from 'react';
import { isAnswer, findNextAdviceIdx } from '../helpers/nodes';
import { useNotificationsSetter } from '../contexts/useNotifications';
import { GameKeys } from '../constants/games';

const BASE_POINTS = 150;

export const useMessagingGame = () => {
    const containerRef = useRef(null);
    const messageContainerRefs = useRef([]);

    const { setNotification } = useNotificationsSetter();

    const [history, setHistory] = useState(['root']);
    const [result, setResult] = useState(null);
    const [currentAdviceIdx, setCurrentAdviceIdx] = useState(-1);

    const game = useMemo(() => getFlowchart(), []);
    const lastNodeId = useMemo(() => history.at(-1), [history]);
    const lastMessage = useMemo(() => game.chart.messages[lastNodeId], [game, lastNodeId]);
    const currentChoices = useMemo(() => lastMessage?.choiceIds.map((choiceId) => game.chart.choices[choiceId]) ?? [], [lastMessage, game]);

    const onMessageChosen = useCallback((choice) => {
        setHistory((pastHistory) => [...pastHistory, choice.id]);
        containerRef.current?.scrollTo({ top: containerRef.current?.scrollHeight ?? 0 });

        if (!choice.nextAnswerId && !choice.nextNodeId) {
            setResult({
                success: choice.successPercentage !== 0,
                points: history.filter((nodeId) => isAnswer(nodeId)).reduce((acc, answerId) => acc + (game.chart.choices[answerId].successPercentage / 100 * BASE_POINTS), 0),
            });
            return;
        }
        if (choice.nextAnswerId) {
            const nextAnswer = game.chart.choices[choice.nextAnswerId];
            setTimeout(() => {
                onMessageChosen(nextAnswer);
            }, 200);
        } else {
            setTimeout(() => {
                setHistory((pastHistory) => [...pastHistory, choice.nextNodeId]);
                containerRef.current?.scrollTo({ top: containerRef.current?.scrollHeight ?? 0, behavior: 'instant' });
            }, 1000);
        }
    }, [game]);

    const goToNextAdvice = useCallback(() => {
        setCurrentAdviceIdx((currentIdx) => {
            const newIdx = findNextAdviceIdx(currentIdx, history, game.chart);
            if (newIdx === null) {
                setNotification(1, GameKeys.Mail);
            }

            messageContainerRefs.current[newIdx]?.scrollIntoView();
            return newIdx;
        });
    }, [history, game]);

    return useMemo(() => ({
        containerRef,
        registerMessageContainerRef: (ref, idx) => (messageContainerRefs.current[idx] = ref),

        goToNextAdvice,
        onMessageChosen,

        game,
        history,
        result,
        currentAdviceIdx,
        currentChoices,
    }));
};