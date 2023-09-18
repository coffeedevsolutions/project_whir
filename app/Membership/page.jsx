"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Membership from "@components/Membership";

export const MembershipPage = () => {
  return (
    <div>
        <Membership />
    </div>
  )
}

export default MembershipPage;


