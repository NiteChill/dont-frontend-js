export const isAnswer = (nodeId) => nodeId.startsWith('answer');

export const findNextAdviceIdx = (currentIdx, history, chart) => {
  if (currentIdx === null) {
    return null;
  }

  for (let i = currentIdx + 1; i < history.length; i++) {
    if (chart.messages[history[i]]?.advice || chart.choices[history[i]]?.advice) {
      return i;
    }
  }
  return null;
};