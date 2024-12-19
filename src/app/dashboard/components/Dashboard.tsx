import React from "react";
import DiscussionList from "./DiscussionList";

export default function () {
  return (
    <div className="px-5 lg:px-10 py-5 flex flex-col lg:flex-row gap-5 lg:justify-center xl:justify-center">
      Admin
      {/* <CreateDiscussion /> */}
      <DiscussionList />
    </div>
  );
}
