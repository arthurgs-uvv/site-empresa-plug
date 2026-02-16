async function includeHTML(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  try {
    const res = await fetch(file);
    if (!res.ok) {
      throw new Error(`Falha ao carregar ${file}: ${res.status}`);
    }

    const text = await res.text();
    el.innerHTML = text;
  } catch (error) {
    console.error(error);
  }
}

Promise.all([
  includeHTML('header', 'páginas/header.html'),
  includeHTML('footer', 'páginas/footer.html')
]);
