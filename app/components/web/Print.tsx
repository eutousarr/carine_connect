"use client";

import { Button } from "@/components/ui/button"

export function PrintPage(){
    function handlePrint() {
        window.print()
    }
    return(
      <Button onClick={handlePrint}> Print </Button>
  //the onClick function is built into React to look for a click event!
    )
  }