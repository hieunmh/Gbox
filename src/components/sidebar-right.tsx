import { cn } from "@/lib/utils";
import { HiChatBubbleLeftRight, HiMiniUserGroup } from "react-icons/hi2";
import GamerAvatar from "./gamer-avatar";

export default function SideBarRight() {
  return (
    <aside
      className={cn(
        "fixed xl:right-8 right-4 top-0 fade-in h-full py-6 flex flex-col  overflow-y-scroll gap-y-4 "
      )}
    >
      <div
        className={cn(
          " flex-1 bg-muted rounded-3xl flex flex-col items-center overflow-hidden   py-6  px-4 "
        )}
      >
        <div className="text-4xl mb-6">
          <HiMiniUserGroup />
        </div>
        <div className="gap-y-6 flex flex-col px-1 scrollbar overflow-y-scroll">
          <GamerAvatar />
          <GamerAvatar />
          <GamerAvatar />
          <GamerAvatar />
          <GamerAvatar />
          <GamerAvatar />
        </div>
      </div>
      <div className={cn(" flex-1 bg-muted rounded-3xl flex flex-col items-center overflow-hidden py-6  px-4  ")}>
        <div className="text-4xl mb-6 ">
          <HiChatBubbleLeftRight />
        </div>
        <div className="gap-y-6 flex flex-col px-1 scrollbar  overflow-y-scroll">
          <GamerAvatar />
          <GamerAvatar />
          <GamerAvatar />
          <GamerAvatar />
          <GamerAvatar />
          <GamerAvatar />
        </div>
      </div>
    </aside>
  );
}
