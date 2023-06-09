/**
 * This file reveals non-committal data of the 
 * ecommerce developed by the company Trilogi.
 * 
 * Only shows version of web template version.
 */
'use-strinct';

let version = null;

if (typeof SHOP !== 'undefined' && SHOP?.version) {
  version = SHOP.version;
} else if (typeof COMMERCE !== 'undefined' && COMMERCE?.version) {
  version = COMMERCE.version;
}

if (version) {
  // Format: mangologi-data/key:value,key:value
  const comment = document.createComment(
    `mangologi-data/templateVersion:${version}`
  );
  document.body.appendChild(comment);
}