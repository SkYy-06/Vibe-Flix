// tanstack query
// we use useMutation when we have to do delete req , put req , post req
import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api";

import React from 'react'

const useAuthUser = () => {
  // for get req we use useQuery


  const authUser = useQuery({
    queryKey: ["authUser"],

    queryFn: getAuthUser,
    retry: false, // auth check
  });

  return {isLoading: authUser.isLoading, authUser: authUser.data?.user}
}

export default useAuthUser
