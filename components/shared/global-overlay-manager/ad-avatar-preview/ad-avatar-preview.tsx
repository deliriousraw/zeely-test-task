import type { ComponentProps } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";

const adAvatarPreviewVariants = cva("", {
  variants: {
    selected: {
      true: "ring-2 ring-offset-2 ring-primary",
      false: "",
    },
  },
  defaultVariants: {
    selected: false,
  },
});

type AdAvatarPreviewProps = ComponentProps<typeof Image> &
  Pick<ComponentProps<typeof AspectRatio>, "ratio"> &
  VariantProps<typeof adAvatarPreviewVariants> & {
    selected?: boolean;
    isDefault?: boolean;
  };

export function AdAvatarPreview({
  selected = false,
  isDefault: _isDefault = false,

  ratio = 112 / 198,
  alt = "Ad Avatar Preview",

  className,
  ref,
  ...props
}: AdAvatarPreviewProps) {
  return (
    <AspectRatio
      ref={ref}
      className="relative"
      ratio={ratio}
      data-slot="ad-avatar-preview"
    >
      {_isDefault && <Badge variant="outline">Default</Badge>}
      <Image
        {...props}
        alt={alt}
        className={cn(adAvatarPreviewVariants({ selected }), className)}
      />
    </AspectRatio>
  );
}
