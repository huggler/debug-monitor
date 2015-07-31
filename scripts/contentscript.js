'use strict';

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  
  var id = message.params.info.menuItemId;
  var chk = message.params.info.checked;

  console.log(message);

  if(id === 'OAS_DEBUGGER'){    
    oas_debugger(chk);
  }
  if(id === 'COMPONENT_DEBUGGER'){    
    component_debugger(chk);
  }
});

/* script de mostra todas as posicoes de banners */
function oas_debugger(chk){
  $("[data-oas]").each(function(key, value){
    var banner = $(this);
    var img = $("img", banner);
    var oas = banner.data("oas");
    var width = banner.data("oas-width");
    var height = banner.data("oas-height");

    if(!width || width === undefined || width < 0){
      width = banner.width();
    }

    if(!height || height === undefined || height < 0){
      height = 60;
    }

    var url = "http://placehold.it/"+ width +"x"+ height+"&text=" + oas + "(" + width + "x" + height + ")";
    banner.html("<img src='"+ url +"'>");
  });
}

/* script que mostra todos os componentes no site */
function component_debugger(chk){

  var txtCss = {
    position:"absolute",
    color:"#000",
    top:0,
    left:0,
    fontWeight: "bold",
    fontSize: "9px",
    display: "block",
    width: "100%",
    background: "#fff",
    borderBottom: "1px dotted red"
  }

  $("[data-component]").each(function(){
        var cmpt = $(this);
        var txtComponent = $("<span class=txt-data-component>").css(txtCss).text(cmpt.data("component"));
        var boxComponent = $("<div>").css({background:"yellow", opacity:"0.4", border:"2px solid red",position:"relative"});

        $(cmpt).wrap(boxComponent);
        $(cmpt).parent().append(txtComponent)
      });
}