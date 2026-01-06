import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

function Profile() {
  const { user } = useSelector((state: RootState) => state.auth);

  if (!user) return null;

  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-lg">
      <h2 className="text-xl font-semibold mb-4">Profile</h2>

      <div className="space-y-2 text-gray-700">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
      </div>
    </div>
  );
}

export default Profile;
