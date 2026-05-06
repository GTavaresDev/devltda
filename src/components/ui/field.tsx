import * as React from "react";

import { cn } from "@/lib/utils";

function FieldGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("space-y-5", className)} {...props} />;
}

function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & {
  orientation?: "vertical" | "horizontal";
}) {
  return (
    <div
      className={cn(
        orientation === "horizontal"
          ? "flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:items-center sm:justify-end"
          : "space-y-2",
        className
      )}
      {...props}
    />
  );
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<"label">) {
  return (
    <label
      className={cn(
        "ml-1 text-sm font-semibold leading-none text-zinc-400",
        className
      )}
      {...props}
    />
  );
}

function FieldDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-sm text-zinc-500", className)} {...props} />
  );
}

export { Field, FieldDescription, FieldGroup, FieldLabel };
