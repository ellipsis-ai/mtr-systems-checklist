function(emitters, quickConnects, gutters, ellipsis) {
  const EllipsisApi = require('ellipsis-api');
const api = new EllipsisApi(ellipsis);

const channel = ellipsis.userInfo.messageInfo.channel;
const user = ellipsis.userInfo.messageInfo.userId;
const summary = `
Checklist for channel <#${channel}> has been completed by <@${user}>:
${checkFor(emitters)}   Emitters flowing
${checkFor(quickConnects)}   Quick connects connected
${checkFor(gutters)}   Gutters draining
`;

const channels = ["bot", "dev"];
api.say({ message: summary }).then(res => {
  Promise.all(channels.map(postSummaryTo)).then(ellipsis.noResponse);                                 
});

function postSummaryTo(channel) {
  return api.run({
    actionName: "post-checklist-summary",
    args: [{ name: "summary", value: summary }],
    channel: channel
  });
}

function checkFor(bool) {
  return bool? ":white_check_mark:" : ":x:";
}
}
