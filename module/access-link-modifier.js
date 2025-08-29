document.addEventListener("DOMContentLoaded", function () {
  const modifierParamNames = ["utm_campaign"];
  const allowedIds = ["real", "login", "demo", "real-banner"];
  const params = new URLSearchParams(window.location.search);

  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
  }

  function setCookie(name, value, days = 1) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; expires=${date.toUTCString()}`;
  }

  const activeModifiers = [];

  modifierParamNames.forEach(name => {
    const urlValue = params.get(name);
    const cookieValue = getCookie(name);

    if (urlValue) {
      setCookie(name, urlValue);         
      activeModifiers.push(urlValue);   
    } else if (cookieValue) {
      activeModifiers.push(cookieValue); 
    }
  });

  if (activeModifiers.length === 0) return;

  document.querySelectorAll('a[href^="/access.php?id="]').forEach(link => {
    const url = new URL(link.href, window.location.origin);
    const idValue = url.searchParams.get("id");
    if (!idValue) return;

    if (allowedIds.length > 0 && !allowedIds.includes(idValue)) return;

    let newId = idValue;

    activeModifiers.forEach(value => {
      if (!newId.includes(value)) {
        newId += `-${value}`;
      }
    });

    url.searchParams.set("id", newId);
    link.href = url.pathname + '?' + url.searchParams.toString();
  });
});
