export interface TVerifyEmail {
  code: string;
  email: string;
}

export const verifyEmailFn = async ({ code, email }: TVerifyEmail) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/email/verify/${code}=${email}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
