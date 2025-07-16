document.addEventListener("DOMContentLoaded", function () {
  // Make external links open in new tabs
  const links = document.querySelectorAll('a[href^="http"]');
  links.forEach(function(link) {
    // Skip if already has target="_blank"
    if (!link.hasAttribute('target')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer'); // For security reasons. Potentially not needed if you trust all links.
    }
  });

  var oldIcons = document.querySelectorAll('.fa.fa-arrow-circle-left');
  oldIcons.forEach(function(icon) {
    icon.classList.remove('fa-arrow-circle-left');
    icon.classList.add('fa-arrow-left');
  });

  var oldIcons = document.querySelectorAll('.fa.fa-arrow-circle-right');
  oldIcons.forEach(function(icon) {
    icon.classList.remove('fa-arrow-circle-right');
    icon.classList.add('fa-arrow-right');
  });

  // Function to hide Read the Docs ad
  function hideReadTheDocsAd() {
    // Try multiple selectors to catch the ad
    const selectors = [
      '#readthedocs-ea-text-fixedfooter-sphinx',
      '[data-ea-publisher="readthedocs"]',
      '[data-ea-type="text"]',
      '.ea-placement',
      '[id^="readthedocs-ea-"]'
    ];
    
    let found = false;
    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        if (element && element.style.display !== 'none') {
          element.style.display = 'none';
          console.log('Read the Docs ad hidden using selector:', selector);
          found = true;
        }
      });
    });
    
    return found;
  }

  // Add CSS to hide ads immediately when they appear
  const style = document.createElement('style');
  style.textContent = `
    #readthedocs-ea-text-fixedfooter-sphinx,
    [data-ea-publisher="readthedocs"],
    [data-ea-type="text"],
    .ea-placement {
      display: none !important;
    }
  `;
  document.head.appendChild(style);

  // Check immediately on DOM load
  hideReadTheDocsAd();

  // Set up MutationObserver to watch for dynamically added content
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      mutation.addedNodes.forEach(function(node) {
        if (node.nodeType === 1) { // Element node
          // Check if the added node is an ad or contains an ad
          if (node.id === 'readthedocs-ea-text-fixedfooter-sphinx' || 
              node.hasAttribute('data-ea-publisher') ||
              node.querySelector && node.querySelector('[data-ea-publisher="readthedocs"]')) {
            hideReadTheDocsAd();
          }
        }
      });
    });
  });

  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Backup polling approach in case MutationObserver misses it
  const pollInterval = setInterval(() => {
    if (hideReadTheDocsAd()) {
      clearInterval(pollInterval); // Stop polling once found
    }
    console.log('Checking for Read the Docs ad...');
  }, 50); // Check every 50ms for faster response

  // Stop polling after 15 seconds to avoid infinite checking
  setTimeout(() => clearInterval(pollInterval), 15000);
});