export const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
        <div className="w-1 h-2 bg-white/40 rounded-full"/>
      </div>
    </div>
  );
};