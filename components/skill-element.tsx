interface Props {
  name: string;
  percent: number;
}

export default function SkillElement({ name, percent }: Props) {
  return (
    <div>
      <h4 className="uppercase text-[#313131] tracking-widest font-bold mb-3">
        {name}
      </h4>
      <div className="bar h-10 w-full bg-[#ccc] rounded">
        <div
          className={"h-full bg-[#313131] rounded-l"}
          style={{ width: percent + "%" }}
        ></div>
      </div>
    </div>
  );
}
