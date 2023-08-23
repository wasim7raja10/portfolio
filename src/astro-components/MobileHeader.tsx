import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import styles from "./MobileHeader.module.css";
import { Button } from "@/components/ui/button";

import links from "../data/links";

const MobileHeader = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex justify-end p-5 md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className={
              styles["menu-button"] +
              " grid h-10 w-10 place-content-center rounded-full"
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 18V16H13.5L10.5 18H3ZM3 13V11H18L15 13H3ZM3 8V6H21V8H3Z"
                fill="#01121B"
              />
            </svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            {links.map((item) => (
              <DropdownMenuItem key={item.text}>
                <a href={item.href}>{item.text}</a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileHeader;
