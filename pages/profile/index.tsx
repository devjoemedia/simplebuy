import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import { BiSearch } from "react-icons/bi";
import ProfileLayout from "../../components/ProfileLayout";

const Index: NextPage = () => {
  return (
    <>
      <ProfileLayout>
        <Box
          sx={{
            boxShadow: { md: "0px 0px 3px 0px rgba(0,0,0,0.2)" },
            padding: 2,
          }}
        >
          <Typography variant="h5" marginBottom={2}>
            Profile Details
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography marginBottom={"5px"} fontSize={"14px"}>
                  First Name
                </Typography>
                <input
                  placeholder="First Name"
                  // value="First Name"
                  style={{
                    border: "1.5px solid #ccc",
                    borderRadius: "3.5px",
                    width: "100%",
                    outline: "none",
                    padding: "10px 10px",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography marginBottom={"5px"} fontSize={"14px"}>
                  Last Name
                </Typography>
                <input
                  placeholder="Last Name"
                  // value="Last Name"
                  style={{
                    border: "1.5px solid #ccc",
                    borderRadius: "3.5px",
                    width: "100%",
                    outline: "none",
                    padding: "10px 10px",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography marginBottom={"5px"} fontSize={"14px"}>
                  Phone Number
                </Typography>
                <input
                  placeholder="Phone Number"
                  // value="Phone Number"
                  style={{
                    border: "1.5px solid #ccc",
                    borderRadius: "3.5px",
                    width: "100%",
                    outline: "none",
                    padding: "10px 10px",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography marginBottom={"5px"} fontSize={"14px"}>
                  Email address
                </Typography>
                <input
                  placeholder="Email address"
                  // value="Email address"
                  style={{
                    border: "1.5px solid #ccc",
                    borderRadius: "3.5px",
                    width: "100%",
                    outline: "none",
                    padding: "10px 10px",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography marginBottom={"5px"} fontSize={"14px"}>
                  City
                </Typography>
                <input
                  placeholder="City"
                  // value="City"
                  style={{
                    border: "1.5px solid #ccc",
                    borderRadius: "3.5px",
                    width: "100%",
                    outline: "none",
                    padding: "10px 10px",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography marginBottom={"5px"} fontSize={"14px"}>
                  State/City
                </Typography>
                <input
                  placeholder="State/City"
                  // value="State/City"
                  style={{
                    border: "1.5px solid #ccc",
                    borderRadius: "3.5px",
                    width: "100%",
                    outline: "none",
                    padding: "10px 10px",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography marginBottom={"5px"} fontSize={"14px"}>
                  Post Code
                </Typography>
                <input
                  placeholder="Post Code"
                  // value="Post Code"
                  style={{
                    border: "1.5px solid #ccc",
                    borderRadius: "3.5px",
                    width: "100%",
                    outline: "none",
                    padding: "10px 10px",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography marginBottom={"5px"} fontSize={"14px"}>
                  Country
                </Typography>
                <input
                  placeholder="Country"
                  // value="Country"
                  style={{
                    border: "1.5px solid #ccc",
                    borderRadius: "3.5px",
                    width: "100%",
                    outline: "none",
                    padding: "10px 10px",
                  }}
                />
              </Grid>
            </Grid>
            <Button
              sx={{
                marginTop: "10px",
                paddingX: "20px",
                bgcolor: "#0f5751",
                color: "#fff",
                "&:hover": {
                  background: "#0f5751",
                },
              }}
              variant="contained"
            >
              Save
            </Button>
          </form>

          {/* Delivery Information */}
          <Box my={3}>
            <Typography variant="h5" marginBottom={2}>
              Delivery Information
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography marginBottom={"5px"} fontSize={"14px"}>
                  First Name
                </Typography>
                <input
                  placeholder="First Name"
                  // value="First Name"
                  style={{
                    border: "1.5px solid #ccc",
                    borderRadius: "3.5px",
                    width: "100%",
                    outline: "none",
                    padding: "10px 10px",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography marginBottom={"5px"} fontSize={"14px"}>
                  Last Name
                </Typography>
                <input
                  placeholder="Last Name"
                  // value="Last Name"
                  style={{
                    border: "1.5px solid #ccc",
                    borderRadius: "3.5px",
                    width: "100%",
                    outline: "none",
                    padding: "10px 10px",
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </ProfileLayout>
    </>
  );
};

export default Index;
