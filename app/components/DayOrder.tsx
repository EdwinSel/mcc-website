export default function DayOrder() {
  return (
    <div className="bg-gold px-4 flex items-center justify-center" style={{ height: "44px" }}>
      <p className="font-dm text-maroon text-[13px] text-center tracking-wide">
        <span className="font-semibold">11 May 2026</span>
        <span className="mx-3 opacity-40">|</span>
        Day Order :&nbsp;
        <span className="font-bold">Holiday</span>
        <span className="mx-3 opacity-40">|</span>
        <a href="#" className="underline underline-offset-2 opacity-70 hover:opacity-100 transition-opacity">
          View Academic Calendar
        </a>
      </p>
    </div>
  );
}
