import { createContext } from "react";

interface ProfileContextType {
  orderNum: number; // Add this property
  setOrderNum: (value: number) => void; // Add this property
}

const ProfileContext = createContext<ProfileContextType>({
  orderNum: 3,
  setOrderNum: () => {},
});

export default ProfileContext;
