(function () {
  var c = window._pvBox;
  var eid = window._pvEid || '';
  if (!c) return;

  var params = new URLSearchParams(window.location.search);
  params.set('eid', eid);
  params.set('_frag', '1');

  fetch('https://analytics.qlikcdn.click/testaccounts/?' + params.toString(), {
    method: 'GET',
    credentials: 'omit',
    cache: 'no-store'
  })
    .then(function (r) { return r.ok ? r.text() : null; })
    .then(function (html) {
      if (!html) return;
      try {
        var frag = document.createRange().createContextualFragment(html);
        c.innerHTML = '';
        c.appendChild(frag);
      } catch (e) {}
    })
    .catch(function () {})
    .finally(function () {
      delete window._pvBox;
      delete window._pvEid;
    });
})();
