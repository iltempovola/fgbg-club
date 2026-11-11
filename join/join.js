(() => {
  'use strict';

  const form = document.getElementById('join-form');
  const gmailInput = document.getElementById('gmail');
  const handleInput = document.getElementById('handle');
  const cityInput = document.getElementById('city');
  const websiteInput = document.getElementById('website');
  const consentInput = document.getElementById('consent');
  const button = document.getElementById('submit-button');
  const status = document.getElementById('join-status');
  const success = document.getElementById('success-instructions');
  const endpoint = form.dataset.endpoint;
  const copy = () => (window.FunnelI18n || { t: {} }).t;
  const message = (key) => copy()[key] || key;
  let submitting = false;

  function setMessage(message, kind = '') {
    status.textContent = message;
    status.dataset.kind = kind;
  }

  function validGmail(value) {
    if (value.length > 254 || !/^[^\s@]+@gmail\.com$/i.test(value)) return false;
    const local = value.slice(0, value.lastIndexOf('@'));
    return local.length > 0 && local.length <= 64 && !local.startsWith('.') && !local.endsWith('.') && !local.includes('..') && /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+$/.test(local);
  }

  function trimmedLength(value) {
    return Array.from(value.trim()).length;
  }

  function validate() {
    if (submitting) return false;
    const handleLength = trimmedLength(handleInput.value);
    const cityLength = trimmedLength(cityInput.value);
    const okay = validGmail(gmailInput.value.trim()) &&
      handleLength >= 1 && handleLength <= 100 &&
      cityLength >= 1 && cityLength <= 100 &&
      consentInput.checked;
    button.disabled = !okay;
    return okay;
  }

  [gmailInput, handleInput, cityInput, consentInput].forEach((control) => control.addEventListener('input', validate));
  consentInput.addEventListener('change', validate);
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submitting) return;
    if (!validate()) {
      if (!consentInput.checked) setMessage(message('needConsent'), 'error');
      else if (!validGmail(gmailInput.value.trim())) setMessage(message('invalidGmail'), 'error');
      else setMessage(message('invalidFields'), 'error');
      return;
    }

    success.hidden = true;
    submitting = true;
    button.disabled = true;
    [gmailInput, handleInput, cityInput, consentInput].forEach((control) => { control.disabled = true; });
    setMessage(message('sending'));

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
        referrerPolicy: 'no-referrer',
        cache: 'no-store',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          gmail: gmailInput.value.trim(),
          handle: handleInput.value.trim(),
          city: cityInput.value.trim(),
          consent: true,
          website: websiteInput.value
        }),
        signal: controller.signal
      });
      let result;
      try { result = await response.json(); } catch (_) { result = null; }
      if (response.ok && result && result.ok === true) {
        form.reset();
        success.hidden = false;
        setMessage(message('received'));
      } else if (response.status === 422) {
        setMessage(message('invalidResponse'), 'error');
      } else if (response.status === 429) {
        setMessage(message('rateLimit'), 'error');
      } else if (response.status >= 500) {
        setMessage(message('unavailable'), 'error');
      } else {
        setMessage(message('unconfirmed'), 'error');
      }
    } catch (error) {
      if (error && error.name === 'AbortError') {
        setMessage(message('timedOut'), 'error');
      } else {
        setMessage(message('unreachable'), 'error');
      }
    } finally {
      window.clearTimeout(timeout);
      submitting = false;
      [gmailInput, handleInput, cityInput, consentInput].forEach((control) => { control.disabled = false; });
      validate();
    }
  });
})();
