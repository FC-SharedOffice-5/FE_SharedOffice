const MiniButton = ({ name }: { name: string }) => {
  return (
    <button
      type="button"
      className="px-[15px] py-2"
    >
      {name}
    </button>
  );
};

export default MiniButton;
