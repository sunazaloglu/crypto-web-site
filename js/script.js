/* ==========================================================================
 *  NEFA crypto web app — interaction scripts
 *  Accordion logic adapted from the W3Schools animated accordion example
 *  referenced in the project brief.
 * ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  /* ---- FAQ accordion -------------------------------------------------- */
  var triggers = document.querySelectorAll('.accordion-trigger');

  // Expand any item marked active by default so its answer is visible on load.
  triggers.forEach(function (trigger) {
    if (trigger.classList.contains('active')) {
      var p = trigger.nextElementSibling;
      p.style.maxHeight = p.scrollHeight + 'px';
    }
  });

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var panel = this.nextElementSibling;
      var isOpen = this.classList.contains('active');

      // Close every panel first (single-open accordion)
      triggers.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-expanded', 'false');
        t.nextElementSibling.style.maxHeight = null;
      });

      // Re-open the clicked one unless it was already open (toggle behaviour)
      if (!isOpen) {
        this.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  /* ---- Buy widget: live conversion + tab switching -------------------- */
  var amountInput = document.getElementById('amount-input');
  var getInput = document.getElementById('get-input');
  var fromSelect = document.getElementById('from-currency');
  var toSelect = document.getElementById('to-currency');

  // toy reference prices (USD per 1 unit) just to make the widget feel live
  var prices = { BTC: 45867.21, ETH: 3140.66, SOL: 152.2, USD: 1 };

  function recalc() {
    if (!amountInput || !getInput) return;
    var amount = parseFloat(amountInput.value.replace(/,/g, '')) || 0;
    var from = prices[fromSelect.value] || 1;
    var to = prices[toSelect.value] || 1;
    var result = (amount * from) / to;
    getInput.value = result.toLocaleString('en-US', { maximumFractionDigits: 5 });
  }

  [amountInput, fromSelect, toSelect].forEach(function (el) {
    if (el) el.addEventListener('input', recalc);
    if (el) el.addEventListener('change', recalc);
  });

  // Buy / Sell tabs
  document.querySelectorAll('.widget-tabs button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.widget-tabs button').forEach(function (b) {
        b.classList.remove('active');
      });
      this.classList.add('active');
    });
  });

  /* ---- Mobile nav: close menu after clicking a link ------------------- */
  document.querySelectorAll('.navbar-collapse .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      var collapse = document.querySelector('.navbar-collapse.show');
      if (collapse && window.bootstrap) {
        var bs = bootstrap.Collapse.getInstance(collapse);
        if (bs) bs.hide();
      }
    });
  });
});
