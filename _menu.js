/* Simple shared nav for the Wildcard Ideas repo — injects a top pill menu on every page. */
(function () {
  var here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  var items = [
    ['index.html', 'Home'],
    ['sgen-strategy-deck.html', 'Deck'],
    ['sgen-agency-hero-modules-proposal.html', 'Proposal'],
    ['sgen-position-assessment.html', 'Assessment']
  ];
  function build() {
    if (document.getElementById('wc-menu')) return;
    var bar = document.createElement('div');
    bar.id = 'wc-menu';
    bar.style.cssText = 'position:fixed;top:10px;left:50%;transform:translateX(-50%);z-index:100000;display:flex;gap:3px;' +
      'background:rgba(12,12,15,.86);border:1px solid #2a2a33;border-radius:999px;padding:4px 6px;' +
      '-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);font-family:ui-monospace,Menlo,Consolas,monospace;' +
      'font-size:11px;box-shadow:0 4px 16px -6px rgba(0,0,0,.6);';
    items.forEach(function (it) {
      var on = (here === it[0]) || (here === '' && it[0] === 'index.html');
      var a = document.createElement('a');
      a.href = it[0];
      a.textContent = it[1];
      a.style.cssText = 'padding:4px 12px;border-radius:999px;text-decoration:none;font-weight:' + (on ? '700' : '500') + ';' +
        'color:' + (on ? '#fff' : '#9aa6b4') + ';background:' + (on ? '#d51522' : 'transparent') + ';transition:.1s;';
      if (!on) { a.onmouseover = function () { a.style.color = '#fff'; a.style.background = 'rgba(255,255,255,.07)'; }; a.onmouseout = function () { a.style.color = '#9aa6b4'; a.style.background = 'transparent'; }; }
      bar.appendChild(a);
    });
    document.body.appendChild(bar);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
