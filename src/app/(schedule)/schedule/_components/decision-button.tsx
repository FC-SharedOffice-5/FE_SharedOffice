import MiniButton from '@/components/mini-button';

const DecisionButton = () => {
  return (
    <div className="body-medium flex justify-end gap-4">
      <MiniButton name="취소" />
      <MiniButton name="확인" />
    </div>
  );
};

export default DecisionButton;
