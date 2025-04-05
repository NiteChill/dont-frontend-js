import { useGSAP } from '@gsap/react';
import styles from './messages.module.scss';
import gsap from 'gsap';
import { SentMessage } from '../components/sentMessage';
import { MessageChoice } from '../components/messageChoice';
import { Result } from '../components/result';
import { useMessagingGame } from '../hooks/useMessagingGame';

export const Messages = () => {
  useGSAP(() => {
    gsap.from('#messages', {
      translateY: 72,
      translateX: -96,
      scale: '0',
      duration: 0.3,
      ease: 'power1.out',
    })
  });
  
  const {
    containerRef,
    registerMessageContainerRef,

    goToNextAdvice,
    onMessageChosen,

    game,
    history,
    result,
    currentAdviceIdx,
    currentChoices,
  } = useMessagingGame();

  return (
    <div id='messages' className={styles.messages}>
      <header>
        <h1>Messages - Brigitte</h1>
      </header>
      <section ref={containerRef}>
        <div className={styles.content}>
          {history.map((nodeId, i) => <SentMessage ref={(ref) => registerMessageContainerRef(ref, i)} key={nodeId} nodeId={nodeId} chart={game.chart} showAdvice={currentAdviceIdx === i} anchorRef={containerRef} />)}
        </div>
      </section>
      <footer>
        {currentChoices.map((choice) => <MessageChoice key={`choice-${choice.id}`} choice={choice} onMessageChosen={onMessageChosen} />)}
        {result !== null && <Result result={result} onShowAdvice={goToNextAdvice} />}
      </footer>
    </div>
  );
};
