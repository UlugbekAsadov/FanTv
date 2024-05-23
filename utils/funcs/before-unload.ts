export const onBeforeUnload = (ev: BeforeUnloadEvent) => {
  ev.returnValue = 'Anything you wanna put here!';
  return "Anything here as well, doesn't matter!";
};
