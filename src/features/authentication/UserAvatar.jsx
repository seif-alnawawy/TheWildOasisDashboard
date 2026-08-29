import { NavLink } from "react-router-dom";
import { useUser } from "./useUser";

export default function UserAvatar() {
  const {
    user: {
      user_metadata: { fullName, avatar },
    },
  } = useUser();

  return (
    <div className="flex gap-2 items-center">
      <NavLink
        to={"/account"}
        className="cursor-pointer size-10 hover:scale-120 transition-all duration-100 rounded-full flex items-center justify-center"
      >
        <img
          src={avatar || "/src/data/img/default-user.jpg"}
          className="w-16 aspect-square object-cover rounded-full"
        />
      </NavLink>
      <p>{fullName}</p>
    </div>
  );
}
