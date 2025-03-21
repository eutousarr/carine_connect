"use client";

import { toast } from "sonner"

interface Props {
  message: string,

}
export default function Notification({props}: {props: Props}) {
  return (
    <div>
        {toast(props.message)}
    </div>
  )
}
