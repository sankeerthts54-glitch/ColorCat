let isActive = false;

chrome.action.onClicked.addListener((tab) => {
  isActive = !isActive;
  
  // Send message to the active tab to toggle the state
  chrome.tabs.sendMessage(tab.id, { action: "toggle", state: isActive }).catch((err) => {
    console.log("Could not send message to tab. Is it a restricted page?", err);
  });
  
  // Update the badge text on the extension icon to show if it's ON
  chrome.action.setBadgeText({
    text: isActive ? "ON" : "",
    tabId: tab.id
  });
  
  chrome.action.setBadgeBackgroundColor({
    color: "#FF0000",
    tabId: tab.id
  });
});
