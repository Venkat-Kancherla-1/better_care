import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import { cards1, cards2 } from "../constants";

const Cards = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {cards1.map((card, index) => (
          <Card key={index} className="mt-6">
            <CardHeader
              color="blue-gray"
              className="relative pt-2 h-44 rounded-lg px-3 shadow-none" // Removed hover effect
            >
              <img
                src={card.imageURL}
                alt="card-image"
                className="object-cover w-full h-full rounded-lg"
              />
            </CardHeader>
            <CardBody className="py-4">
              <Typography
                variant="h3"
                color="blue-gray"
                className="ml-2 font-bold mb-1 text-shadow-md"
              >
                {card.title}
              </Typography>
              <Typography className="px-3 text-sm">{card.text}</Typography>
            </CardBody>
            <CardFooter className="flex justify-center">
              <Link to={card.link}>
                <button className="bg-teal-600 rounded-lg text-lg mb-1 text-white leading-none px-6 py-3">
                  Explore!
                </button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 justify-center mb-8">
        {cards2.map((card, index) => (
          <Card key={index} className="mt-6">
            <CardHeader
              color="blue-gray"
              className="relative h-44 px-3 pt-2 rounded-lg shadow-none" // Removed hover effect
            >
              <img
                src={card.imageURL}
                alt="card-image"
                className="object-cover w-full h-full rounded-lg"
              />
            </CardHeader>
            <CardBody className="py-4">
              <Typography
                variant="h3"
                color="blue-gray"
                className="ml-2 font-bold mb-1"
              >
                {card.title}
              </Typography>
              <Typography className="px-3 text-sm">{card.text}</Typography>
            </CardBody>
            <CardFooter className="flex justify-center">
              <Link to={card.link}>
                <button className="bg-teal-600 rounded-lg text-lg mb-1 text-white leading-none px-6 py-3">
                  Explore!
                </button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Cards;
