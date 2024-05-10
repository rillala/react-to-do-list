interface EventBtnProps {
  text: string;
  onClick?: () => void;
}

export default function EventBtn({ text, onClick, ...props }: EventBtnProps) {
  return (
    <>
      <button {...props} onClick={onClick}>
        {text}
      </button>
    </>
  );
}
