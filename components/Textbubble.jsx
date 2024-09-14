const TextBubble = ({
  message,
  bgColor = 'bg-white',
  textColor = 'text-white',
  textSize = 'text-lg',
  maxWidth = 'max-w-md',
  alignment = 'center',
  arrowPosition = 'bottom',
  arrowSize = 12,
}) => {
  const alignmentClasses = {
    left: 'justify-start',
    right: 'justify-end',
    center: 'justify-center',
  };

  const arrowDirectionStyles = {
    bottom: `border-t-[${arrowSize}px] border-t-${bgColor} border-l-[${arrowSize}px] border-l-transparent border-r-[${arrowSize}px] border-r-transparent`,
    top: `border-b-[${arrowSize}px] border-b-${bgColor} border-l-[${arrowSize}px] border-l-transparent border-r-[${arrowSize}px] border-r-transparent`,
  };

  return (
    <div className={`flex ${alignmentClasses[alignment]} my-4`}>
      <div className={`relative ${maxWidth} p-6 ${bgColor} ${textColor} rounded-lg whitespace-nowrap`}>
        {/* Text message */}
        <p className={textSize}>{message}</p>

        {/* Dynamic Triangle Arrow (position depends on the arrowPosition prop) */}
        <div
          className={`absolute w-0 h-0 ${arrowDirectionStyles[arrowPosition]} 
                      ${arrowPosition === 'bottom' ? 'left-1/2 transform -translate-x-1/2 -bottom-2' : ''} 
                      ${arrowPosition === 'top' ? 'left-1/2 transform -translate-x-1/2 -top-2' : ''}`}
        ></div>
      </div>
    </div>
  );
};

export default TextBubble;
