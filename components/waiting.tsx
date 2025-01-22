"use client"

import React from "react"
import { Loader2 } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface WaitingDialogProps {
  isOpen: boolean
  title?: string
  description?: string
}

export function WaitingDialog({
  isOpen,
  title = "Please wait",
  description = "Operation in progress...",
}: WaitingDialogProps) {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px] z-20">
        <div className="flex flex-col items-center justify-center space-y-4 p-6">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <h2 className="text-lg font-semibold text-center">{title}</h2>
          <p className="text-sm text-muted-foreground text-center">{description}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

