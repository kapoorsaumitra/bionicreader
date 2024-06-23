function makeBionic(text) {
    return text.replace(/\b\w+\b/g, word => {
      const midpoint = Math.ceil(word.length / 2);
      return `<strong>${word.slice(0, midpoint)}</strong>${word.slice(midpoint)}`;
    });
  }
  
  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const span = document.createElement('span');
      span.innerHTML = makeBionic(node.textContent);
      node.parentNode.replaceChild(span, node);
    } else if (node.nodeType === Node.ELEMENT_NODE && !['SCRIPT', 'STYLE', 'TEXTAREA'].includes(node.tagName)) {
      Array.from(node.childNodes).forEach(processNode);
    }
  }
  
  processNode(document.body);