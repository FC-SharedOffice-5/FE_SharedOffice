import CommentIcon from '@/assets/icons/comment';
import { Button, Input } from '@headlessui/react';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';

type InputCommentProps = {
  onAddComment: (comment: string) => void;
};

const InputComment = ({ onAddComment }: InputCommentProps) => {
  const {
    control,
    formState: { isValid },
    reset,
    handleSubmit,
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    onAddComment(data.comment);
    reset();
  };

  return (
    <div className="flex justify-between border-t-[0.75px] border-gray-300 p-4 px-4">
      <div className="flex items-center gap-2">
        <CommentIcon
          color="#1DCC9A"
          size={24}
        />
        <Controller
          name="comment"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="댓글을 입력해주세요"
              className="focus:outline-none"
              type="text"
            />
          )}
        />
      </div>

      <Button
        disabled={!isValid}
        className="lable-small rounded-lg bg-primary px-[27.5px] py-[12px] text-white data-[disabled]:bg-gray-200"
        onClick={handleSubmit(onSubmit)}
      >
        확인
      </Button>
    </div>
  );
};

export default InputComment;
