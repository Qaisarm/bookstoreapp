import React, { useState } from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { AppBar, Box, Tab, Tabs, Toolbar } from "@mui/material";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [value, setValue] = useState();
  const handleChange = (e, val) => {
    setValue(val);
    if (val == 0) {
      router.push("/");
    } else if (val == 1) {
      router.push("/books");
    } else if (val == 2) {
      router.push("/books/add");
    }
  };
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#c83576" }}>
      <Toolbar>
        <AutoStoriesIcon sx={{ fontSize: "30px" }} />
        <Box display="flex" margin={"auto"}>
          <Tabs onChange={handleChange} value={value} textColor="inherit">
            <Tab sx={{fontFamily:"Neucha"}} label="Home" />
            <Tab sx={{fontFamily:"Neucha"}}  label="All Books" />
            <Tab sx={{fontFamily:"Neucha"}} label="Add New Book" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
