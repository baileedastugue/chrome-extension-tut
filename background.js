// chrome.runtime.onInstalled.addListener(() => {
//   chrome.action.setBadgeText({
//     text: 'ON',
//   });
// });

const extensions = 'https://developer.chrome.com/docs/extensions';
const webstore = 'https://developer.chrome.com/docs/webstore';

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {
    // retrieves the action badge to see if the extension is set to ON or OFF
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    const nextState = prevState === 'ON' ? 'OFF' : 'ON'; // sets the next state to be the opposite

    // set the action badge to the next state
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });
  }
});
