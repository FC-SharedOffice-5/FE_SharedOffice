import { SignupData } from '@/types/data';
import { createStore } from 'zustand/vanilla';

type TPasswordNickname = Pick<SignupData, 'password' | 'memberNickname'>;

type TUserInfo = Pick<SignupData, 'memberName' | 'memberGender' | 'memberBirth'>;

type TOptionalOptions = Pick<SignupData, 'emailAgree' | 'pushAgree' | 'messageAgree'>;

export type SignupState = SignupData;

export type SignupActions = {
  updateAgreeOptionalOptions: (optionalOptions: TOptionalOptions) => void;
  updateEmail: (email: string) => void;
  updateUserInfo: (info: TUserInfo) => void;
  updatePasswordNickname: (passwordNickname: TPasswordNickname) => void;
};

export type SignupStore = SignupState & SignupActions;

export const defaultInitState: SignupState = {
  email: '',
  password: '',
  role: '',
  useYn: false,
  memberName: '',
  memberNickname: '',
  memberGender: false,
  memberBirth: '',
  emailAgree: false,
  messageAgree: false,
  pushAgree: false,
};

export const initSignupStore = (): SignupState => {
  return defaultInitState;
};

export const createSignupStore = (initState: SignupState = defaultInitState) => {
  return createStore<SignupStore>()((set) => ({
    ...initState,
    updateAgreeOptionalOptions: (options: TOptionalOptions) =>
      set(() => ({
        emailAgree: options.emailAgree,
        pushAgree: options.pushAgree,
        messageAgree: options.messageAgree,
      })),
    updateEmail: (email: string) =>
      set(() => ({
        email,
      })),
    updateUserInfo: (info: TUserInfo) =>
      set(() => ({
        memberName: info.memberName,
        memberGender: info.memberGender,
        memberBirth: info.memberBirth,
      })),
    updatePasswordNickname: (passwordNickname: TPasswordNickname) =>
      set(() => ({
        password: passwordNickname.password,
        memberNickname: passwordNickname.memberNickname,
      })),
  }));
};
