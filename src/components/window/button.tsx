export function TitlebarButton({
  icon,
  style = {},
  action = () => {},
  color
}: TitlebarButtonProps) {
  return (
    <>
      <div
        className={`rounded-lg hover:bg-white/10 cursor-pointer transition-colors`}
        style={style}
        onClick={action}
      >
        {icon}
      </div>
    </>
  );
}

interface TitlebarButtonProps {
  icon: React.ReactNode;
  color?: React.CSSProperties["color"];
  style?: React.CSSProperties;
  action?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
