import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";



interface CardBoxProps {
  title: string;
  author: string;
  price?: number; 
}

const CardBox: React.FC<CardBoxProps> = ({ title, author, price }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>author: {author}</CardDescription>
      </CardHeader>
      <CardContent>
     
     <p>Price:$ {price}</p>
        <Dialog >
  <DialogTrigger className="bg-black text-white p-1 pl-2 pr-2 rounded">Buy   
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure to Buy?</DialogTitle>
      <DialogDescription>
       {title}
      </DialogDescription>
      <DialogDescription>
      By:{author}
      </DialogDescription>
    </DialogHeader>
    <Button>Pay : ${price}</Button>
  </DialogContent>
</Dialog>
      </CardContent>
    

      <CardFooter>
        <p>Written by: {author}</p>
      </CardFooter>
    </Card>
  );
};

export default CardBox;
