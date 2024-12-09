export default function TabButton({ children, isSelected, ...props }) {
  // return <li><button className={props.isSelected ? "active" : undefined} onClick={props.handleClick}>{props.children}</button></li>;
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
