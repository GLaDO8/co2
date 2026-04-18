export function RebreathedAirFormula() {
  return (
    <div className="flex justify-center py-1 text-center">
      <div className="overflow-x-auto">
        <pre className="m-0 whitespace-pre font-departure text-[13px] leading-[1.15] text-paper-ink max-[480px]:text-[12px]">
          {`                    (indoor_co2 - outdoor_co2)
% rebreathed air =  ―――――――――――――――――――――――――
                    (exhaled_co2 - outdoor_co2)`}
        </pre>
      </div>
    </div>
  );
}
