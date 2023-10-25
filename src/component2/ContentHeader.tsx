// HeaderContent.jsx
import React from "react";

interface HeaderContentProps {
  count: number | undefined;
  loading: boolean;
}

const HeaderContent: React.FC<HeaderContentProps> = ({ count, loading }) => {
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : count !== undefined ? (
        <p>You have {count} task(s)</p>
      ) : (
        <p>You don't have any tasks</p>
      )}
    </div>
  );
};

export default HeaderContent;
