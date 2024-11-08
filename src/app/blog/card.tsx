import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Define the types for the props that will be passed to the component
interface CardBoxProps {
  title: string;
  content: string;
  author: string;
}

const CardBox: React.FC<CardBoxProps> = ({ title, content, author }) => {
  console.log({ title, content, author });
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{author}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <p>Written by: {author}</p>
      </CardFooter>
    </Card>
  );
};

export default CardBox;
