<script>
  // Initialize Mermaid once the DOM is ready.
  document.addEventListener('DOMContentLoaded', function () {
    if (window.mermaid) {
      mermaid.initialize({
        startOnLoad: true,
        theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'default',
        securityLevel: 'antiscript'
      });
    }
  });
</script>