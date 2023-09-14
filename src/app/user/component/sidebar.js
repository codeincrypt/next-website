import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="card border-0 p-4">
      <ul className="list-group leftbar_data">
        <Link href="/user/dashboard">
          <li className="list-group-item leftbar_option highlightOption">
            Dashboard
          </li>
        </Link>
        <Link href="/user/profile">
          <li className="list-group-item leftbar_option">Profile</li>
        </Link>
        <Link href="/user/courses">
          <li className="list-group-item leftbar_option"> My Courses</li>
        </Link>
        <Link href="/user/invite">
          <li className="list-group-item leftbar_option"> Invite</li>
        </Link>
        <li className="list-group-item leftbar_option"> Edit Profile</li>
        <li className="list-group-item leftbar_option"> Account Setting </li>
        <li className="list-group-item leftbar_option"> Logout codeincrypt </li>
      </ul>
    </div>
  );
}
