type TitleProps = {
  name: string;
};

const Title = ({ name }: TitleProps) => {
  return <div className="title-small border-b-[0.75px] border-black py-2 text-black">{name}</div>;
};

export default Title;
