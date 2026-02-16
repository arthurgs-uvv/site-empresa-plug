async function includeHTML(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(file);
  const text = await res.text();
  el.innerHTML = text;
}

includeHTML("header", "páginas/header.html");
includeHTML("footer", "páginas/footer.html");
