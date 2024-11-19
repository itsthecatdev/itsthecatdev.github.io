const params = new URLSearchParams(window.location.search);
const rparam = params.get('r');
const listeparam = params.get('liste');


if (rparam) {
    window.location.href = `../projects/tastschreibgenie/me/${rparam}.html`;
}
if (listeparam) {
    window.location.href = `../projects/tastschreibgenie/me/`;
}