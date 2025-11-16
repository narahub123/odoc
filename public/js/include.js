// data-include 속성이 있는 요소에 외부 HTML 조각을 삽입
document.querySelectorAll("[data-include]").forEach(async (el) => {
  const file = el.getAttribute("data-include");
  if (!file) return;

  try {
    const resp = await fetch(file);
    if (!resp.ok) throw new Error(resp.statusText);
    const html = await resp.text();
    el.innerHTML = html;
  } catch (err) {
    console.error("Include failed for", file, err);
  }
});
