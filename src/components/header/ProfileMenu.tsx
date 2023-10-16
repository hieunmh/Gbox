"use client";

import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { ProfilesType } from "@/types/supabaseTableType";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function ProfileMenu({
  children,
  data,
}: {
  children: React.ReactNode;
  data: ProfilesType | null;
}) {
  const { supabaseClient } = useSessionContext();

  const router = useRouter();

  const logout = async () => {
    toast.promise(supabaseClient.auth.signOut(), {
      loading: "Signing out",
      success: () => {
        router.push("/sign-in");
        return "Signed out";
      },
      error: "Error signing out",
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="w-10 h-10 rounded-full cursor-pointer">{children}</div>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="bg-muted max-w-[160px] flex flex-col gap-y-2"
      >
        <div className="super font-bold">{data?.name}</div>
        <Separator className="bg-muted-foreground"/>
        <Link href="/" className="hover:text-primary">Home</Link>
        <Link href={"/user/" + data?.name} className="hover:text-primary ">Profile</Link>
        <div className="cursor-pointer hover:text-primary" onClick={logout}>
          Log out
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ProfileMenu;
