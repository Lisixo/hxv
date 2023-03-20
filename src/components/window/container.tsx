function pushDragRegion(value: boolean){
  return value ? { 'data-tauri-drag-region': true } : {}
}

export function TitlebarContainer({
  style = {},
  children,
  className,
  dragRegion = false
}: {
  style?: React.CSSProperties;
  children: React.ReactNode;
  className?: string;
  dragRegion?: boolean
}) {
  return (
    <>
      <div
        className={`bg-custom-900 text-white h-8 flex justify-between items-center gap-2 ${className}`.trim()}
        style={style}
        {...pushDragRegion(dragRegion)}
      >
        {children}
      </div>
    </>
  );
}
