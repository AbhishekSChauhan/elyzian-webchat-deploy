(function() {
  // create the iframe element
  var iframe = document.createElement('iframe');
  iframe.setAttribute('id', 'chatbot-iframe');
  iframe.setAttribute('srcdoc', '<!DOCTYPE html><html><head><link href="https://dev.elyzian.in/css/webchat" rel="stylesheet"></head><body><div id="sc-webchat"></div><script defer="" type="text/javascript" src="https://dev.api.elyzian.in/js/webchat/companyId"></script></body></html>');
  iframe.style.position = 'fixed';
  iframe.style.right = '0px';
  iframe.style.bottom = '0px';
  iframe.style.width = '300px';
  iframe.style.height = '200px';
  iframe.style.zIndex = '1000000000';
  iframe.style.border = 'none';
  
  // append the iframe to the container div
  var container = document.getElementById('salescaptain-webchat');
  container.appendChild(iframe);
  
  // add event listener to the window object
  window.addEventListener('message', function(event) {
    if (event.data === 'toggle-iframe-size') {
      toggleIframeSize();
      console.log('Received toggle-iframe-size message from child iframe');
    } else if (event.data === 'toggle-normal-iframe-size') {
      toggleNormalIframeSize();
      console.log('Received toggle-normal-iframe-size message from child iframe');
    } else if(event.data === 'close-on-click-outside') {
      console.log('Received close-on-click-outside message from child iframe====');
    }
  });
  
  // toggle the iframe size
  function toggleIframeSize() {
    var chatbotIframe = document.getElementById('chatbot-iframe');
    if (window.innerWidth < 600) {
      chatbotIframe.style.width = '100%';
      chatbotIframe.style.height = '100%';
    } else {
      chatbotIframe.style.width = '100%';
      chatbotIframe.style.height = '100%'; 
    }
  }
  
  // set the iframe size to normal
  function toggleNormalIframeSize() {
    var chatbotIframe = document.getElementById('chatbot-iframe');
    chatbotIframe.style.width = '300px';
    chatbotIframe.style.height = '200px';
  }
})();