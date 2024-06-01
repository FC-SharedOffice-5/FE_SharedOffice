type TitleProps = {
  name: string;
  date?: string;
};

const Title = ({ name, date }: TitleProps) => {
  return (
    <div className="flex justify-between border-b-[0.75px] border-black py-2">
      <span className="title-small text-black">{name}</span>
      <span className="label-small text-black/40">{date}</span>
    </div>
  );
};

export default Title;
