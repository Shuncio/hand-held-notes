import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';

function Header() { {/* creates the Header Component */}
  return (
    <header>
      <h1>
        <HighlightIcon /> {/* renders HighlightIcon MUI's Component */}
        Keeper
      </h1>
    </header>
  );
}

export default Header;
