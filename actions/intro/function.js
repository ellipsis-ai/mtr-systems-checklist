function(ellipsis) {
  const intro = `
:memo: Hello, this is the MTR Systems Checklist reminder. 

Anyone in this channel can answer the following five y/n questions. Click below to begin.
`;
ellipsis.success(intro, {
  choices: [{
    label: "Start",
    actionName: "run-checklist",
    allowOthers: true
  }]
});
}
