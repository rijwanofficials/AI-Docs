import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

function ProfileCard() {
  const { user } = useSelector((state: RootState) => state.auth);
  console.log("user", user);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/100"
          alt="avatar"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-lg">{user?.name || "User"}</h3>
          <p className="text-sm text-gray-500">{user?.email || "No email"}</p>
        </div>
      </div>

      <hr className="my-5" />

      <div className="space-y-2 text-sm">
        <ProfileMenu label="My Profile" />
        <ProfileMenu label="Settings" />
        <ProfileMenu label="Notifications" right="Allow" />
        <ProfileMenu label="Log Out" danger />
      </div>
    </div>
  );
}

function ProfileMenu({
  label,
  right,
  danger,
}: {
  label: string;
  right?: string;
  danger?: boolean;
}) {
  return (
    <div
      className={`flex justify-between p-3 rounded-lg cursor-pointer
      ${danger ? "text-red-600 hover:bg-red-50" : "hover:bg-gray-100"}`}
    >
      <span>{label}</span>
      {right && <span className="text-gray-500">{right}</span>}
    </div>
  );
}

export default ProfileCard;
