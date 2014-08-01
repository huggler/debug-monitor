chrome.browserAction.onClicked.addListener(function(info, tab) {
  
  /* VERSAO 2 */
  /* a ideia eh fazer uma paginazinha e passar os parametros via target */
  /******************************************************************************/
  /*function click(e) {
    chrome.tabs.query({
      "active": true,
      "currentWindow": true
    }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
          "type": e.target.id,
          "params": {tab: tab, info: info}
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
  });*/
});


function onClickHandler(info, tab) {
  chrome.tabs.query({
    "active": true,
    "currentWindow": true
  }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
        "type": "context_menu1",
        "params": {tab: tab, info: info}
    });
  });
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

var contextMenusIds = [];
var contextMenus = [
  {
    "title": "Catalogo",
    "id": "parent"
  },{
    "title": "Componentes Files",
    "type": "checkbox",
    "parentId": "parent",
    "id": "COMPONENT_DEBUGGER"
  },{
    "title": "Static Files",
    "type": "checkbox",
    "parentId": "parent",
    "id": "STATIC_FILES"
  }
  ,{
    "title": "OAS Banners",
    "type": "checkbox",
    "parentId": "parent",
    "id": "OAS_DEBUGGER"
  }
];

chrome.runtime.onInstalled.addListener(function(details) {
  for(var i in contextMenus){
    chrome.contextMenus.create(contextMenus[i]);
  }
});