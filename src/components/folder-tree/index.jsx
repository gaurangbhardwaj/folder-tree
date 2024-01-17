import React, { useState, useEffect } from "react";
import Folder from "./folder";
import { data } from "../../data";

const FolderTree = () => {
  const [folderData, setFolderData] = useState([]);
  useEffect(() => {
    // Assume we are getting data from API
    setFolderData(data);
  }, []);
  return (
    <>
      {folderData.map((rootData) => (
        <Folder key={rootData?.uuid} folderData={rootData} />
      ))}
    </>
  );
};

export default FolderTree;
