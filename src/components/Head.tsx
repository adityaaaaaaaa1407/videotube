import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import { Input } from "./ui/input";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
const Head = () => {
  return (
    <div className="grid grid-flow-col">
      <div>
        <div>
          <Sheet>
            <SheetTrigger>
              <IoMenu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div>
          <img
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
            alt="youtube-logo"
            width={30}
            height={30}
          />
        </div>
      </div>
      <div>
        <Input type="text" placeholder="Search"></Input>
        <FaSearch />
      </div>
      <div>
        <FaUserCircle />
      </div>
    </div>
  );
};

export default Head;
