import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react'

export const Spinner = () => {
  return (
    <div className="spinner">
      <span className="ball-1"></span>
      <span className="ball-2"></span>
      <span className="ball-3"></span>
      <span className="ball-4"></span>
      <span className="ball-5"></span>
      <span className="ball-6"></span>
      <span className="ball-7"></span>
      <span className="ball-8"></span>
    </div>
  );
};


export const DotLoader = () => {
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

interface LoadingButtonProps {
  btnText: string;
  btnClass?: string;
  btnVariant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null;
}

export const LoadingButton = ({ btnText, btnClass, btnVariant }: LoadingButtonProps) => {
  return (
    <Button className={cn("cursor-none", btnClass)} variant={btnVariant}>
      {btnText} &nbsp; <DotLoader />
    </Button>
  );
};