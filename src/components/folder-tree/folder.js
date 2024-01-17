import React, { useState } from "react";
import FolderIcon from "../../icons/ic_folder.svg";
import ListIcon from "../../icons/ic_list.svg";
import SpaceIcon from "../../icons/ic_space.svg";

const Icons = {
  folder: FolderIcon,
  list: ListIcon,
  space: SpaceIcon,
};

const Folder = ({ folderData = {} }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setOpen((prev) => !prev)}>
        <img
          src={Icons[folderData?.collection_type]}
          alt={folderData?.collection_type}
        />{" "}
        {folderData?.name}
      </div>
      {open &&
        folderData?.children.map((internalData) => {
          return (
            <div style={{ paddingLeft: 10 }}>
              <Folder folderData={internalData} />
            </div>
          );
        })}
    </div>
  );
};

export default Folder;
