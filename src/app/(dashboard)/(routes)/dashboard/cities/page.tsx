"use client";

import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { showAddCityModal } from "@/redux/modal-slice";

export default function CitiesPage() {
  const dispatch = useDispatch();
  return (
    <div className="border-blue-300 border-2 w-full h-full">
      <Button onClick={() => dispatch(showAddCityModal())}>add city</Button>
    </div>
  );
}
