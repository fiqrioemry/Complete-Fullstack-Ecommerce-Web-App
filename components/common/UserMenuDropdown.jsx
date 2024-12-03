import React from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { TbLayoutDashboard } from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";
import { useAuth } from "@/provider/AuthProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserMenuDropDown = () => {
  const { handleSignOut } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <FaUserCircle className="h-8 w-8 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          <div className="flex-center space-x-4">
            <FaUserCircle className="h-8 w-8" />
            <div>
              <p>customer 01</p>
              <span>customer01@gmail.com</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            href="/user/settings"
            className="flex items-center space-x-2 px-2 py-1"
          >
            <TbLayoutDashboard />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/user/transaction"
            className="flex items-center space-x-2 px-2 py-1"
          >
            <GrTransaction />
            <span>Transaction</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <button
            className="flex items-center w-full space-x-2 px-2 py-1"
            onClick={handleSignOut}
          >
            <AiOutlineLogout />
            <span>Logout</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenuDropDown;
{
  /* <div className="flex-center space-x-4 py-4 border-b">
<FaUserCircle className="h-8 w-8" />
<div>
  <p>customer 01</p>
  <span>customer01@gmail.com</span>
</div>
</div>

<div className="space-y-2 py-4">
<Link
  href="/user/settings"
  className="flex items-center space-x-2 px-2 py-1 rounded-md hover:bg-gray-200"
>
  <TbLayoutDashboard />
  <span>Dashboard</span>
</Link>

<Link
  href="/user/transaction"
  className="flex items-center space-x-2 px-2 py-1 rounded-md hover:bg-gray-200"
>
  <GrTransaction />
  <span>Transaction</span>
</Link>

<button
  className="flex items-center w-full space-x-2 px-2 py-1 rounded-md hover:bg-gray-200"
  onClick={handleSignOut}
>
  <AiOutlineLogout />
  <span>Logout</span>
</button>
</div> */
}
