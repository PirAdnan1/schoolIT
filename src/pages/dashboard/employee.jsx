import React from "react";

// components
import Employe from "@/src/components/admin/Employe";
import Layout from "@/src/layout/dashboard";

Employee.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

function Employee() {
  return (
    <div>
      <Employe />
    </div>
  );
}

export default Employee;
