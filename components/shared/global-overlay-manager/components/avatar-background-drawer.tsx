"use client";

import {
  PromptInput,
  PromptInputButton,
  PromptInputTextarea,
  PromptInputToolbar,
} from "@/components/shared/ai-prompt-input";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Redo2Icon, Undo2Icon, XIcon } from "lucide-react";
import Image from "next/image";
import { memo } from "react";
import { useOverlayState } from "../utils";

type AvatarBackgroundDrawerProps = {};

const AvatarBackgroundDrawer = memo(() => {
  const { props, hideDialog } = useOverlayState<AvatarBackgroundDrawerProps>(
    "avatar-background-drawer"
  );

  return (
    <Sheet open onOpenChange={hideDialog}>
      <SheetContent>
        <SheetHeader className="flex-row justify-between items-center">
          <SheetTitle>Change background</SheetTitle>
          <SheetClose>
            <XIcon className="size-6" />
          </SheetClose>
        </SheetHeader>
        <div className="flex flex-col gap-3 px-5">
          <h3 className="text-sm text-black">Background idea</h3>
          <div>
            <PromptInput>
              <PromptInputTextarea
                placeholder="Type your message..."
                value="Animate glowing rays pulsating from behind the bottle, leaves gently swaying, and golden sparkles floating upward for a natural, radiant effect."
              />
              <PromptInputToolbar>
                <Button variant="ghost">
                  <Image
                    src="/icons/sparkle.svg"
                    alt="Sparkle"
                    width={20}
                    height={20}
                  />
                  Regenerate
                </Button>
                <div className="flex items-center gap-2">
                  <PromptInputButton>
                    <Undo2Icon className="size-5" />
                  </PromptInputButton>
                  <PromptInputButton>
                    <Redo2Icon className="size-5" />
                  </PromptInputButton>
                </div>
              </PromptInputToolbar>
            </PromptInput>
          </div>
          <div>
            <h3 className="text-sm text-black">Your backgrounds</h3>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
});

AvatarBackgroundDrawer.displayName = "AvatarBackgroundDrawer";

export default AvatarBackgroundDrawer;
