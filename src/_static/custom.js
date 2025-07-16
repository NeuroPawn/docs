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
    const adElement = document.getElementById('readthedocs-ea-text-fixedfooter-sphinx');
    if (adElement) {
      adElement.style.display = 'none';
      console.log('Read the Docs ad hidden');
      return true; // Found and hidden
    }
    return false; // Not found yet
  }

  // Check immediately on DOM load
  hideReadTheDocsAd();

  // Set up MutationObserver to watch for dynamically added content
  const observer = new MutationObserver(function(mutations) {
    hideReadTheDocsAd();
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
  }, 100); // Check every 100ms

  // Stop polling after 10 seconds to avoid infinite checking
  setTimeout(() => clearInterval(pollInterval), 10000);
});