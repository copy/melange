// Generated by Melange
'use strict';

const Curry = require("melange.js/curry.js");
const React = require("react");

function safeMakeEvent(eventName) {
  if (typeof Event === "function") {
    return new Event(eventName);
  }
  const $$event = document.createEvent("Event");
  $$event.initEvent(eventName, true, true);
  return $$event;
}

function path(param) {
  const $$window = typeof window === "undefined" ? undefined : window;
  if ($$window === undefined) {
    return /* [] */0;
  }
  const raw = $$window.location.pathname;
  switch (raw) {
    case "" :
    case "/" :
        return /* [] */0;
    default:
      const raw$1 = raw.slice(1, undefined);
      const match = raw$1[raw$1.length - 1 | 0];
      const raw$2 = match === "/" ? raw$1.slice(0, -1) : raw$1;
      let a = raw$2.split("/", undefined);
      let _i = a.length - 1 | 0;
      let _res = /* [] */0;
      while(true) {
        const res = _res;
        const i = _i;
        if (i < 0) {
          return res;
        }
        _res = {
          hd: a[i],
          tl: res
        };
        _i = i - 1 | 0;
        continue ;
      };
  }
}

function hash(param) {
  const $$window = typeof window === "undefined" ? undefined : window;
  if ($$window === undefined) {
    return "";
  }
  const raw = $$window.location.hash;
  switch (raw) {
    case "" :
    case "#" :
        return "";
    default:
      return raw.slice(1, undefined);
  }
}

function search(param) {
  const $$window = typeof window === "undefined" ? undefined : window;
  if ($$window === undefined) {
    return "";
  }
  const raw = $$window.location.search;
  switch (raw) {
    case "" :
    case "?" :
        return "";
    default:
      return raw.slice(1, undefined);
  }
}

function push(path) {
  const match = typeof history === "undefined" ? undefined : history;
  const match$1 = typeof window === "undefined" ? undefined : window;
  if (match !== undefined && match$1 !== undefined) {
    match.pushState(null, "", path);
    match$1.dispatchEvent(safeMakeEvent("popstate"));
    return ;
  }
  
}

function replace(path) {
  const match = typeof history === "undefined" ? undefined : history;
  const match$1 = typeof window === "undefined" ? undefined : window;
  if (match !== undefined && match$1 !== undefined) {
    match.replaceState(null, "", path);
    match$1.dispatchEvent(safeMakeEvent("popstate"));
    return ;
  }
  
}

function urlNotEqual(a, b) {
  if (a.hash !== b.hash || a.search !== b.search) {
    return true;
  } else {
    let _aList = a.path;
    let _bList = b.path;
    while(true) {
      const bList = _bList;
      const aList = _aList;
      if (!aList) {
        if (bList) {
          return true;
        } else {
          return false;
        }
      }
      if (!bList) {
        return true;
      }
      if (aList.hd !== bList.hd) {
        return true;
      }
      _bList = bList.tl;
      _aList = aList.tl;
      continue ;
    };
  }
}

function url(param) {
  return {
    path: path(undefined),
    hash: hash(undefined),
    search: search(undefined)
  };
}

function watchUrl(callback) {
  const $$window = typeof window === "undefined" ? undefined : window;
  if ($$window === undefined) {
    return function (param) {
      
    };
  }
  const watcherID = function (param) {
    Curry._1(callback, url(undefined));
  };
  $$window.addEventListener("popstate", watcherID);
  return watcherID;
}

function unwatchUrl(watcherID) {
  const $$window = typeof window === "undefined" ? undefined : window;
  if ($$window !== undefined) {
    $$window.removeEventListener("popstate", watcherID);
    return ;
  }
  
}

function useUrl(serverUrl, param) {
  const match = React.useState(function () {
        if (serverUrl !== undefined) {
          return serverUrl;
        } else {
          return url(undefined);
        }
      });
  const setUrl = match[1];
  const url$1 = match[0];
  React.useEffect((function () {
          const watcherId = watchUrl(function (url) {
                Curry._1(setUrl, (function (param) {
                        return url;
                      }));
              });
          const newUrl = url(undefined);
          if (urlNotEqual(newUrl, url$1)) {
            Curry._1(setUrl, (function (param) {
                    return newUrl;
                  }));
          }
          return (function (param) {
              unwatchUrl(watcherId);
            });
        }), []);
  return url$1;
}

const dangerouslyGetInitialUrl = url;

exports.push = push;
exports.replace = replace;
exports.watchUrl = watchUrl;
exports.unwatchUrl = unwatchUrl;
exports.dangerouslyGetInitialUrl = dangerouslyGetInitialUrl;
exports.useUrl = useUrl;
/* react Not a pure module */
