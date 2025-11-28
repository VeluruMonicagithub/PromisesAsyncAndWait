function timer(duration, onComplete) {
  setTimeout(() => {
    const message = `Timer of ${duration}ms finished!`;
    onComplete(message);
  }, duration);
}

function handleFinish(message) {
  console.log(`Callback Executed: ${message}`);
}

timer(2000, handleFinish);
timer(1000, handleFinish);