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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6">
        {cards1.map((card, index) => (
          <Card key={index} className="mt-6 hover:scale-110 transition-transform">
            <CardHeader
              color="blue-gray"
              className="relative h-56 rounded-lg px-3 py-3"
            >
              <img
                src={card.imageURL}
                alt="card-image"
                className="object-cover w-full h-full rounded-lg"
              />
            </CardHeader>
            <CardBody className="py-6">
              <Typography
                variant="h3"
                color="blue-gray"
                className="ml-2 font-bold mb-2 text-shadow-md"
              >
                {card.title}
              </Typography>
              <Typography className="px-3">{card.text}</Typography>
            </CardBody>
            <CardFooter className="flex justify-center">
              <Link to={card.link}>
                <button className="bg-teal-600 rounded-lg text-xl mb-3 text-white leading-none px-2 py-2">
                  Explore!
                </button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 justify-center lg:px-40">
        {cards2.map((card, index) => (
          <Card key={index} className="mt-6 hover:scale-110 transition-transform">
            <CardHeader
              color="blue-gray"
              className="relative h-56 px-3 py-3 rounded-lg"
            >
              <img
                src={card.imageURL}
                alt="card-image"
                className="object-cover w-full h-full rounded-lg"
              />
            </CardHeader>
            <CardBody className="py-6">
              <Typography
                variant="h3"
                color="blue-gray"
                className="ml-2 font-bold mb-2"
              >
                {card.title}
              </Typography>
              <Typography className="px-3">{card.text}</Typography>
            </CardBody>
            <CardFooter className="flex justify-center">
              <Link to={card.link}>
                <button className="bg-teal-600 rounded-lg text-xl mb-3 text-white leading-none px-2 py-2">
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
