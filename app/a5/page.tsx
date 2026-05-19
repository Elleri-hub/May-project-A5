"use client"


import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { addToast } from "@heroui/toast";


export default function A5Page() {
  const reasonsToast = () => {
    addToast({
      title: "Reason 1",
      description:
        "Go to the pictures page to see what he looks like!",
      color: "danger",
    });
  };
  const reason2Toast = () => {
    addToast({
      title: "Reason 2",
      description:
        "Go to the about page to learn more about his life!",
      color: "danger",
    });
  };
  return (

    <div>


      <h1 className={title()}>Snape was not a villain</h1>

      <p>

    

      </p>
      <Button onPress={() => {reasonsToast()}}>
       He was a double agent for dumbledore and got into voldemorts inner circle 
       and gave him false information to protect Harry
      </Button>
      <Button>
        Even though snape killed dumbledore it was actually planned in advance by dumbldore 
        and snape to secure snape a position a spot in voldemorts inner circle
      </Button>
      <Button>
The only thing snape really wanted was to protect harry so he killed people and lied just to protect him
      </Button>
   
    </div>
    

  );

}