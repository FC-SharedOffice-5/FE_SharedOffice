type ValidationSchema = {
  required: string;
  pattern: {
    value: RegExp;
    message: string;
  };
};

export const emailValidation: ValidationSchema = {
  required: '이메일을 입력해주세요.',
  pattern: {
    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
    message: '올바른 이메일을 입력해주세요.',
  },
};

export const passwordValidation: ValidationSchema = {
  required: '비밀번호를 입력해주세요.',
  pattern: {
    value: /^.{8,}$/,
    message: '',
  },
};
