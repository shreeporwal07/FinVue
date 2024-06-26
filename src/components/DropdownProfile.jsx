import React, { useState, useRef, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserAvatar from "../images/user-avatar-32.png";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import FeedbackDialog from "../pages/FeedbackDialog";
import Swal from "sweetalert2";

const options = ["Update Profile Pic", "Give Feedback"];
const ITEM_HEIGHT = 48;

function DropdownProfile({ align }) {
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userpic, setuserpic] = useState(null);
  const trigger = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUpdateProfileClick = () => {
    // Trigger the file input click event
    fileInput.current.click();
    handleClose(); // Close the dropdown after triggering the file input
  };

  const handleFileSelected = async (event) => {
    if (
      !event ||
      !event.target ||
      !event.target.files ||
      event.target.files.length === 0
    ) {
      return; // Do nothing if event or files are not available
    }
    const file = event.target.files[0];
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("userId", user.sub);
      const response = await axios.post(
        `https://finvue-backened.onrender.com/updateProfile`,
        formData
      );
      setuserpic(response.data.user.picture);
      console.log(response);
      handleClose();
      setOpenDialog(false);
      Swal.fire({
        title: "Profile picture updated successfully!",
        icon: "success",
      });
    } catch (err) {
      console.log(err);
      let errorMessage =
        "An error occurred while updating your profile picture.";
      if (err.response && err.response.data && err.response.data.error) {
        errorMessage = err.response.data.error;
      }
      Swal.fire({
        title: "Error",
        text: errorMessage,
        icon: "error",
      });
    }
  };

  const fetchUserProfile = async () => {
    if (!user) return;
    const userId = user?.sub;
    try {
      const response = await axios.get(
        `https://finvue-backened.onrender.com/getProfile/${userId}`
      );
      if (response.data.user[0] && response.data.user[0].picture) {
        setuserpic(response.data.user[0].picture);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    })
      .then(() => {
        Swal.fire({
          title: "Logged out successfully!",
          icon: "success",
        });
      })
      .catch((error) => {
        console.error("Error logging out:", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while logging out.",
          icon: "error",
        });
      });
  };

  const handleFeedbackClick = () => {
    setOpenDialog(true);
  };

  const handleSignIn = () => {
    loginWithRedirect({
      redirectUri: window.location.origin,
    });
  };

  useEffect(() => {
    fetchUserProfile();
  }, [user]);

  const fileInput = useRef(null);

  console.log("userpic", userpic);

  return (
    <>
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
            src={
              userpic
                ? userpic
                : user && user.picture
                ? user.picture
                : UserAvatar
            }
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
        <input
          type="file"
          accept="image/*"
          ref={fileInput}
          style={{ display: "none" }}
          onChange={handleFileSelected}
        />
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <svg
              className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
              viewBox="0 0 12 12"
            >
              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
            </svg>
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
                marginTop: "1rem",
                backgroundColor: "#434974",
                color: "white",
              },
            }}
          >
            {isAuthenticated ? (
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            ) : (
              <MenuItem onClick={handleSignIn}>SignIn</MenuItem>
            )}
            {options.map((option) => (
              <MenuItem
                key={option}
                onClick={() => {
                  if (option === "Update Profile Pic") {
                    handleUpdateProfileClick();
                  } else if (option === "Give Feedback") {
                    handleClose();
                    handleFeedbackClick();
                  } else {
                    handleClose();
                  }
                }}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
      <FeedbackDialog open={openDialog} onClose={() => setOpenDialog(false)} />
    </>
  );
}

export default DropdownProfile;
