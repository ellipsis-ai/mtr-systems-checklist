function(ellipsis) {
  const intro = `
:memo: Hello, this is the MTR Systems Checklist reminder. Anyone in this channel can answer with y or n:
`;
ellipsis.success(intro, {
  next: {
    actionName: "run-checklist"
  }
});
}
