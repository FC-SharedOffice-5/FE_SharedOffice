import BackIcon from '@/assets/icons/BackIcon';

type TProps = {
  title: string;
};

export default function Header({ title }: TProps) {
  return (
    <nav className="flex place-content-between items-center px-4 pb-3 pt-8">
      <BackIcon />
      <h1 className="label-large">{title}</h1>
      <div />
    </nav>
  );
}
