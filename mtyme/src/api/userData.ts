import { User } from "@/model/userModel";

export function createUserDataFetcher() {
  let data: User | null = null;

  return async function fetchUserData(id: number): Promise<User | null> {
    if (data) {
      return data;
    }
    const response = await fetch(`http://localhost:3000/api/users?id=${id}`);
    data = await response.json();
    return data;
  };
}
