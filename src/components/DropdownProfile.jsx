import React, { useState, useRef, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserAvatar from "../images/user-avatar-32.png";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const options = [
  'Update Profile',
  'Logout',
];

const ITEM_HEIGHT = 48;

function DropdownProfile({ align }) {
  const { user } = useAuth0();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="relative inline-flex pl-4 pr-4 rounded-lg overflow-hidden">
      <button
        ref={trigger}
        className="inline-flex justify-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <img
          className="w-10 h-10 rounded-full"
          src={user !== undefined ? user.picture : UserAvatar}
          width="32"
          height="32"
          alt="User"
        />
        <div className="flex items-center justify-center">
          <span className="hidden sm:inline-block truncate ml-4 text-2xl font-medium font-kalam text-slate-300 group-hover:text-slate-200 h-10 mt-2">
            {user !== undefined ? (
              <>{user.given_name ? user.given_name : user.nickname}</>
            ) : (
              <>{"Leena Shree"}</>
            )}
          </span>
        </div>
      </button>
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <svg className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
}

export default DropdownProfile;
