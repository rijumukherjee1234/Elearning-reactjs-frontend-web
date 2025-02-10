import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDBox from "components/MDBox";

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    role: "",
    name: "",
    initials: "",
    email: "",
    mobile: "",
    gender: "",
    country: "Singapore",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Course Data:", courseData);
    alert("User Added Successfully!");
  };

  return (
    <DashboardLayout>
      <MDBox pt={6} pb={3}>
        <Card sx={{ padding: 2 }}>
          <CardContent>
            <Typography variant="p" gutterBottom textAlign="center" fontWeight="bold">
              Add Course
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={3}>
                <TextField
                  fullWidth
                  label="Course Category"
                  name="role"
                  value={courseData.role}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  fullWidth
                  label="Course SubCategory"
                  name="name"
                  value={courseData.name}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={3}>
                <TextField
                  fullWidth
                  label="Course Name"
                  name="initials"
                  value={courseData.initials}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  fullWidth
                  label="Course Type"
                  name="email"
                  value={courseData.email}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={3}>
                <TextField
                  fullWidth
                  label="Course Price"
                  name="mobile"
                  value={courseData.mobile}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  fullWidth
                  label="Course Description"
                  name="gender"
                  value={courseData.gender}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={3}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  value={courseData.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  fullWidth
                  label="Username"
                  name="username"
                  value={courseData.username}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} display="flex" justifyContent="flex-end">
                <Button variant="outlined" color="secondary" sx={{ mr: 2 }}>
                  Cancel
                </Button>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                  Save Changes
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </MDBox>
    </DashboardLayout>
  );
};

export default AddCourse;
