import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="card border-0 p-4">
      <ul class="list-group leftbar_data">
        <Link href="/user/dashboard">
          <li class="list-group-item leftbar_option highlightOption">
            Dashboard
          </li>
        </Link>
        <Link href="/user/profile">
          <li class="list-group-item leftbar_option">Profile</li>
        </Link>
        <Link href="/user/courses">
          <li class="list-group-item leftbar_option"> My Courses</li>
        </Link>
        <Link href="/user/invite">
          <li class="list-group-item leftbar_option"> Invite</li>
        </Link>
        <li class="list-group-item leftbar_option"> Edit Profile</li>
        <li class="list-group-item leftbar_option"> Account Setting </li>
        <li class="list-group-item leftbar_option"> Logout codeincrypt </li>
      </ul>
    </div>
  );
}
