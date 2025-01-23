const apps = {
  "mac.local:3000": {
    appid: 1,
    url: "http://mac.local:3000",
  },
  "wasp.local": {
    appid: 1,
    url: "http://wasp.local:8083",
  },
  "blogging.monext.pages.dev": {
    appid: 1,
    url: "https://farm.monext.pages.dev",
  },
  "userz.net": { appid: 0, url: "https://uzerz.net/" },
  "rudix.store": { appid: 1, url: "https://rudix.store/" },
  "localhost:3000": { appid: 2, url: "https://answerz.store/" },
  "quotta.store": { appid: 3, url: "https://quotta.store/" },
  "howtoanswers.store": { appid: 4, url: "https://howtoanswers.store/" },
  "questionz.store": { appid: 5, url: "https://questionz.store/" },
  // ...
  0: { appid: 0, url: "https://userz.net/" },
  1: { appid: 1, url: "https://rudix.store/" },
  2: { appid: 2, url: "https://answerz.store/" },
  3: { appid: 3, url: "https://quotta.store/" },
  4: { appid: 4, url: "https://howtoanswers.store/" },
  5: { appid: 5, url: "https://questionz.store/" },
} as { [key: string | number]: { appid: number; url: string } };

export default apps;
