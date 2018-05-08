const banner = document.querySelector('#page-banner');

//output node type
console.log('#page-banner node type is:', banner.nodeType);

//output node name
console.log('#page-banner node name is:', banner.nodeName);

//output if node has child nodes
console.log('#page-banner has child nodes:', banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);

//output cloned banner element
console.log(clonedBanner);