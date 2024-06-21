// eslint-disable-next-line consistent-return
const startAnimation = (actions: any, names: string[]) => {
  const animation = actions[names[0]];
  if (animation) {
    animation.reset().play();
    return () => animation.fadeOut(0.5);
  }
};

export default startAnimation;
