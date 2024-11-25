import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useRouter } from "next/navigation";

import { FaUserCircle } from "react-icons/fa";
import ButtonElement from "../element/ButtonElement";
import { useAuth } from "@/provider/AuthProvider";

const UserMenuDropDown = () => {
  const router = useRouter();
  const { handleLogout, loading } = useAuth();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex-center space-x-2">
          <FaUserCircle className="text-3xl cursor-pointer" />
          <span>customer 01</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto space-y-6 bg-background">
        <div className="flex-center space-x-4">
          <FaUserCircle className="text-3xl cursor-pointer" />
          <h3>customer 01</h3>
        </div>

        <div className="flex flex-col space-y-2">
          <ButtonElement
            title="profile"
            variant="primary"
            style="auth-button"
            handleClick={() => router.push("/users/settings")}
          />
          <ButtonElement
            title="transaction"
            variant="primary"
            style="auth-button"
            handleClick={() => router.push("/users/transaction")}
          />

          <ButtonElement
            title="Logout"
            style="auth-button"
            loading={loading}
            variant="primary"
            loadingStyle="auth-loading"
            handleClick={handleLogout}
            disabled={loading}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserMenuDropDown;
