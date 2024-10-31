const setFaviconLight = () => {
  document.querySelector('link[rel="apple-touch-icon-precomposed"]').href = '/img/touch-icon-light.png'
  document.querySelector('link[rel="icon"][sizes="32x32"]').href = '/img/favicon-light@2x.png'
  document.querySelector('link[rel="icon"][sizes="16x16"]').href = '/img/favicon-light.png'
}

const setFaviconDark = () => {
  document.querySelector('link[rel="apple-touch-icon-precomposed"]').href = '/img/touch-icon-dark.png'
  document.querySelector('link[rel="icon"][sizes="32x32"]').href = '/img/favicon-dark@2x.png'
  document.querySelector('link[rel="icon"][sizes="16x16"]').href = '/img/favicon-dark.png'
}

const onLoad = () => {
  const links = [
    { rel: "apple-touch-icon-precomposed" },
    { rel: "icon", sizes: "32x32" },
    { rel: "icon", sizes: "16x16" },
  ];

  links.forEach(({rel, sizes}) => {
    let querySelector = `link[rel="${rel}"]`;
    if (sizes) {
      querySelector += `[sizes="${sizes}"]`;
    }

    const linkTag = document.querySelector(querySelector);
    if (linkTag == null) {
      const newLink = document.createElement("link");
      newLink.rel = rel;
      document.head.appendChild(newLink);
    }
  });

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    setFaviconLight();
  } else {
    setFaviconDark();
  }

  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', event => {
    if (event.matches) {
      setFaviconLight();
    } else {
      setFaviconDark()
    }
  });
}

document.addEventListener('DOMContentLoaded', onLoad);
