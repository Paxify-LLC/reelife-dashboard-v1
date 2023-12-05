import { useEffect, useState, type ReactElement } from "react";

import { fetchUserStores } from "@/apiCalls/auth";
import DashboardLayout from "@/components/dashboard/Layout";
import Instances from "@/components/dashboard/home/Instances";
import OverViewTop from "@/components/dashboard/home/OverViewTop";
import Stories from "@/components/dashboard/home/Stories";
import { BACKEND_URL } from "@/constants";
import axios from "axios";
import type { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  const [analytics, setAnalytics] = useState<any[]>([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    fetchUserStores(user?.uid)
      .then((stores) => {
        if (Array.isArray(stores)) {
          Promise.all(
            stores?.map((store) => {
              const apiUrl = `${BACKEND_URL}/firebase/events/${user?.uid}/${store?.id}`;
              return axios.get(apiUrl);
            })
          ).then((response) => {
            const analytics = response[0]?.data?.data;
            const filteredAnalytics = Object.keys(analytics).map(
              (key: string) => {
                // @ts-ignore
                return analytics[key];
              }
            );

            setAnalytics(filteredAnalytics);
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="md:py-4 md:px-10">
      <OverViewTop analytics={analytics} />
      <Instances analytics={analytics} />
      <Stories analytics={analytics} />
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Page;
