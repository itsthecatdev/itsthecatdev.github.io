const params = new URLSearchParams(window.location.search);
const rparam = params.get('return');


if (rparam) {
    window.location.href = `https://${rparam}`;
}