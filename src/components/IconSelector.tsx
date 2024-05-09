export default function IconSelector({ inputIcon, onIconChange }) {
  return (
    <select value={inputIcon} onChange={onIconChange}>
      <option value="" disabled>
        choose icon
      </option>
      <option value={10}>Ten</option>
      <option value={20}>Twenty</option>
      <option value={30}>Thirty</option>
    </select>
  );
}
