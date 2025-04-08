"use client";
import React, { ReactNode, useEffect } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import GlobalAPI from "@/app/_services/GlobalAPI";
import { BusinessList } from "@/types";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

const BookingSection = ({
  children,
  business,
}: {
  children: ReactNode;
  business: BusinessList;
}) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = React.useState<string | null>();
  const [timeSlot, setTimeSlot] = React.useState<{ time: string }[]>([]);
  const data = useSession();
  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }

    setTimeSlot(timeList);
  };
  const saveBooking = () => {
    GlobalAPI.createNewBooking(
      business.id,
      date || new Date(),
      selectedTime || "",
      data?.data?.user?.email || "",
      data?.data?.user?.name || ""
    )
      .then((res) => {
        console.log(res);
        if (res) {
          // TOAST SUCCESS MESSAGE
          toast("Service Booked Successfully");
        } else {
          // TOAST ERROR MESSAGE
          toast.error("Error Booking Service");
        }
      })
      .catch((err) => {
        console.log(err);
        // TOAST ERROR MESSAGE
        toast.error("Error Booking Service");
      });
  };
  useEffect(() => {
    getTime();
  }, []);
  return (
    <div>
      <Sheet>
        <SheetTrigger> {children}</SheetTrigger>
        <SheetContent className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Book a Service</SheetTitle>
            <SheetDescription>
              Select Date and Time slot for your service.
              {/* DATE PICKER */}
              <div className="flex flex-col gap-5 items-baseline">
                <h2 className="my-5 font-bold">Select Date</h2>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>
              <h2 className="my-5 font-bold">Select Time Slot</h2>
              <div className="grid grid-cols-3 gap-3">
                {/* TIME SLOT PICKER */}
                {timeSlot.map((item, index) => (
                  <Button
                    key={index}
                    variant={"outline"}
                    className={`border rounded-full p-2 px-3 hover:bg-black hover:text-white cursor-pointer ${
                      selectedTime === item.time && "bg-black text-white"
                    }`}
                    onClick={() => {
                      setSelectedTime(item.time);
                    }}
                  >
                    {item.time}
                  </Button>
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <SheetClose asChild>
              <div className="flex gap-5 justify-end items-center">
                <Button className="cursor-pointer" variant={"destructive"}>
                  Cancel
                </Button>
                <Button
                  className="cursor-pointer"
                  disabled={!(selectedTime && date)}
                  onClick={() => {
                    saveBooking();
                  }}
                >
                  Book
                </Button>
              </div>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default BookingSection;
