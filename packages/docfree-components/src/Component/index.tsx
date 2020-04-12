export default function Component({ render, children }) {
  if (typeof render === 'function') {
    return render();
  }
  return children;
}
