
import { demoAccount } from '../data/demoAccount';
import type { UserProfile } from '../types';

export async function checkLogin(
  username: string,
  password: string
): Promise<UserProfile | null> {
  // Simulate a short network request.
  await new Promise((resolve) => setTimeout(resolve, 500));

  const isValid =
    username.trim() === demoAccount.username &&
    password === demoAccount.password;

  if (!isValid) {
    return null;
  }

  return demoAccount.profile;
}
