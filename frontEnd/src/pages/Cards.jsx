import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
   
  } from "@material-tailwind/react"
   
  export default function Cards() {
    return (
      <Card className="mt-6 w-96 ml-5 mb-5 bg-[#e5e5e5] rounded-lg">
        <CardHeader color="blue-gray" className="relative h-56 rounded-lg ">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            UI/UX Review Check
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className=" flex justify-center pt-0 mb-1">
          <button className="bg-black text-white px-2 py-2 rounded-l rounded-r">Learn More</button>
        </CardFooter>
      </Card>
    );
  }