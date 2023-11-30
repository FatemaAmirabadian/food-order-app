import React from "react";
import MenuPage from "../../components/templates/MenuPage";

function index({ data }) {
  return (
    <div>
      <MenuPage data={data}/>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();
  return {
    props: { data },
  };
}

export default index;
