import warning from 'warning';

let warned = {};

export default function routerWarning(falseToWarn, message, ...args) {
  // Only issue deprecation warnings once.
  if (message.indexOf('deprecated') !== -1) {
    if (warned[message]) {
      return;
    }

    warned[message] = true;
  }

  warning(falseToWarn, `[react-router] ${message}`, ...args);
}

export function resetWarned() {
  warned = {};
}
