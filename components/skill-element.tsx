import classNames from "classnames";

interface Props {
  name: string;
  percent: number;
}

export default function SkillElement({ name, percent }: Props) {
  const skill = classNames(
    `w-[${percent}%]`,
    "h-full",
    "bg-[#313131]",
    "rounded-l"
  );

  const test = {
    normal: `h-full bg-[#313131] rounded-l w-[${percent}%]`,
  };

  return (
    <div>
      <h4 className="uppercase text-[#313131] tracking-widest font-bold mb-3">
        {name}
      </h4>
      <div className="bar h-10 w-full bg-[#ccc] rounded">
        {/* 672px */}
        {/* <div className="h-full bg-[#313131] rounded-l w-[80%]"></div> */}
        <div
          className={"h-full bg-[#313131] rounded-l w-[" + percent + "%]"}
        ></div>
      </div>
    </div>
  );
}
