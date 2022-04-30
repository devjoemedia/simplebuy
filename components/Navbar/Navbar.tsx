import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Drawer, FormControl, InputLabel, TextField } from "@mui/material";
import { BiUserCircle, BiSearch } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "app/store";
import { removeFromCart } from "features/cart/cartSlice";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const pages = [
  "Computing",
  "Phone & Tablets",
  "Electronics",
  "Clothing",
  "Groceries",
  "Health & Beauty",
  "Sporting Goods",
  "Fashion",
  "Baby Products",
];

const Navbar = () => {
  const { cartTotal, cartCount } = useSelector(
    (state: RootState) => state.cart
  );
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const ToggleUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const ToggleNavMenu = () => {
    setOpenSidebar(!openSidebar);
  };

  const ToggleCartMenu = () => {
    setOpenCart(!openCart);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "white" }}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", display: "flex" }}
        >
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={ToggleNavMenu}
              sx={{ color: "black", paddingLeft: 0 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Typography
            sx={{
              mr: 2,
              fontWeight: "bold",
              color: "#0f5751",
              display: { xs: "none", md: "block" },
            }}
          >
            <Link href="/">SimpleBuy</Link>
          </Typography>

          {/* navar search */}
          <Box
            sx={{
              color: "#333",
              display: { xs: "none", md: "flex" },
              width: "500px",
              margin: "auto",
            }}
          >
            <Box
              sx={{
                maxWidth: "100%",
                width: "500px",
                margin: "auto",
                border: "1.5px solid #ccc",
                borderRadius: "3.5px",
                display: "flex",
                alignItems: "center",
                padding: "0 20px",
              }}
            >
              <BiSearch style={{ fontSize: "20px" }} />
              <input
                style={{
                  width: "100%",
                  outline: "none",
                  padding: "10px",
                  border: "none",
                }}
              />
            </Box>
            <Button
              sx={{
                marginLeft: "10px",
                paddingX: "20px",
                bgcolor: "#0f5751",
                color: "#fff",
                "&:hover": {
                  background: "#0f5751",
                },
              }}
              variant="contained"
            >
              Search
            </Button>
          </Box>

          <Box
            sx={{ marginLeft: "20px", display: "flex", alignItems: "center" }}
          >
            <Box
              sx={{
                padding: "8px 20px",
                bgcolor: "#004c46",
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "150px",
                borderRadius: "3px",
                cursor: "pointer",
              }}
              onClick={ToggleUserMenu}
            >
              <BiUserCircle style={{ fontSize: "20px" }} />
              <Typography>Account</Typography>
              {anchorElUser ? (
                <IoIosArrowUp style={{ fontSize: "20px" }} />
              ) : (
                <IoIosArrowDown style={{ fontSize: "20px" }} />
              )}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#333",
                marginLeft: "10px",
                cursor: "pointer",
                position: "relative",
              }}
              onClick={ToggleCartMenu}
            >
              <Box sx={{ position: "relative" }}>
                <AiOutlineShoppingCart style={{ fontSize: "25px" }} />
                <Typography
                  bgcolor="#004c46"
                  sx={{
                    height: "20px",
                    width: "20px",
                    position: "absolute",
                    borderRadius: "50%",
                    right: "-10px",
                    top: "-9px",
                    color: "#fff",
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                >
                  {cartCount | 0}
                </Typography>
              </Box>
              <Typography marginLeft={"10px"}>Cart</Typography>
            </Box>
            <Menu
              sx={{ mt: "45px", width: "250px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  sx={{ width: "150px" }}
                >
                  <Link href="/profile" passHref>
                    <Typography textAlign="center">{setting}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>

            {/* Cart Drawer */}
            <Drawer
              anchor="right"
              onClose={ToggleCartMenu}
              open={openCart}
              sx={{
                "& .MuiPaper-root": {
                  width: "100%",
                  maxWidth: { xs: 280, sm: 380 },
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#333",
                  borderBottom: "1px solid #f1f1f1",
                  padding: "15px",
                  position: "absolute",
                  top: "0",
                  width: "100%",
                  bgcolor: "#fff",
                  zIndex: 99,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    cursor: "pointer",
                  }}
                  onClick={ToggleCartMenu}
                >
                  <AiOutlineClose />
                </Typography>

                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#0f5751",
                  }}
                >
                  SimpleBuy
                </Typography>
              </Box>

              <Box
                sx={{
                  padding: " 15px",
                  paddingTop: "60px",
                  height: "100%",
                  overflowY: "scroll",
                }}
              >
                <Box
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                  }}
                >
                  {/* Cart Item Row */}
                  {cartItems.length > 0 &&
                    cartItems.map((item) => (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                        key={item.id}
                      >
                        <Box
                          component="img"
                          width="60px"
                          height="60px"
                          src={"/images/" + item.imageUrl}
                        />
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography
                            bgcolor="#004c46"
                            sx={{
                              padding: "4px 10px",
                              opacity: "0.8",
                              fontWeight: "bold",
                              color: "#fff",
                              fontSize: "12px",
                              textAlign: "center",
                              marginRight: "10px",
                            }}
                          >
                            -
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "12px",
                              color: "#333",
                            }}
                          >
                            1
                          </Typography>
                          <Typography
                            bgcolor="#004c46"
                            sx={{
                              padding: "4px 10px",
                              opacity: "0.8",
                              fontWeight: "bold",
                              color: "#fff",
                              fontSize: "12px",
                              textAlign: "center",
                              marginLeft: "10px",
                            }}
                          >
                            +
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#333",
                          }}
                        >
                          ${item.price}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "bolder",
                            cursor: "pointer",
                          }}
                          onClick={() => dispatch(removeFromCart(item))}
                        >
                          <AiOutlineClose />
                        </Typography>
                      </Box>
                    ))}
                </Box>
              </Box>
              <Box
                sx={{
                  bottom: 0,
                  position: "absolute",
                  bgcolor: "#004c46",
                  color: "#fff",
                  // height: "50px",
                  padding: "15px",
                  margin: 0,
                  minWidth: { xs: 280, sm: 380 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Cart Total: ${cartTotal.toFixed(2)}</Typography>
                <Button
                  sx={{
                    bgcolor: "white",
                    color: "#004c46",
                    "&:hover": {
                      bgcolor: "white",
                      color: "#004c46",
                    },
                  }}
                >
                  Checkout
                </Button>
              </Box>
            </Drawer>

            {/* Nav Drawer */}
            <Drawer
              anchor="left"
              onClose={ToggleNavMenu}
              open={openSidebar}
              sx={{
                "& .MuiPaper-root": {
                  width: "100%",
                  maxWidth: 280,
                },
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  padding: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#333",
                    borderBottom: "1px solid #f1f1f1",
                    padding: "10px 0",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#0f5751",
                    }}
                  >
                    SimpleBuy
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bolder",
                      cursor: "pointer",
                    }}
                    onClick={ToggleNavMenu}
                  >
                    <AiOutlineClose />
                  </Typography>
                </Box>

                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "flex", md: "none" },
                    flexDirection: "column",
                    alignItems: "left",
                  }}
                >
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={ToggleNavMenu}
                      sx={{
                        color: "#444",
                        display: "block",
                        textAlign: "left",
                      }}
                    >
                      <Link href="/" passHref>
                        {page}
                      </Link>
                    </Button>
                  ))}
                </Box>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
