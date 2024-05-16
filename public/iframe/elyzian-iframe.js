(function() {
  // create the iframe element
  var iframe = document.createElement('iframe');
  iframe.setAttribute('id', 'chatbot-iframe');
  iframe.setAttribute('srcdoc', '<!DOCTYPE html><html><head><link href="https://dev-webchat.elyzian.in/css/webchat" rel="stylesheet"></head><body><div id="sc-webchat"></div><script defer="" type="text/javascript" src="https://dev-webchat.elyzian.in/js/webchat/companyId"></script></body></html>');
  iframe.style.position = 'fixed';
  iframe.style.right = '0px';
  iframe.style.bottom = '0px';
  iframe.style.width = '336px';
  iframe.style.height = '320px';
  iframe.style.zIndex = '2147483001 !important';
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

(function() {
  // create the iframe element
  var iframe = document.createElement('iframe');
  iframe.setAttribute('id', 'signup-iframe');
  iframe.setAttribute('srcdoc', '<!DOCTYPE html><html><head><link href="https://dev-webchat.elyzian.in/css/signup" rel="stylesheet"></head><body><div id="elyzian-signup"></div><script defer="" type="text/javascript" src="https://dev-webchat.elyzian.in/js/signup/companyId"></script></body></html>');
  iframe.style.position = 'fixed';
  iframe.style.right = '0px';
  iframe.style.bottom = '0px';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.zIndex = '2147483001 !important';
  iframe.style.border = 'none';
  
  // append the iframe to the container div
  var container = document.getElementById('elyzian-signup-page');
  container.appendChild(iframe);
  
  // add event listener to the window object
  window.addEventListener('message', function(event) {
    if (event.data === 'close-signup-iframe') {
      closeSignupIframe();
      console.log('Received close-signup-iframe message from child iframe(i.e. signup component)');
    } else if (event.data === 'open-signup-iframe') {
      openSingupIframe();
      console.log('Received toggle-normal-iframe-size message from child iframe');
    }
  });
  
  // toggle the iframe size
  function closeSignupIframe() {
    var signupIframe = document.getElementById('signup-iframe');
    signupIframe.style.width = '0px';
    signupIframe.style.height = '0px'; 
  }
  
  // set the iframe size to normal
  function openSingupIframe() {
    var signupIframe = document.getElementById('signup-iframe');
    signupIframe.style.width = '100%';
    signupIframe.style.height = '100%';
  }
})();
