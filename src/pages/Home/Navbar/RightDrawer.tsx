import * as React from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export interface ILeftDrawerProps {
    open: boolean;
    onClose: () => void;
}

export default function RightDrawer(props: ILeftDrawerProps) {
    const [openedIds, setOpenedIds] = React.useState<number[]>([])

    const createCollapseCB = React.useCallback((id: number) => {
        setOpenedIds(prev => {
            if (prev.includes(id)) {
                return prev.filter(curid => !(curid === id))
            } else {
                return prev.concat(id)
            }
        })
    }, [])

    // <div className="link left-side"></div>
    //         <div className="link"></div>
    //         <div className="link"></div>
    //         <div className="link"></div>
    //         <div className="link"></div>
    //         <div className="link"></div>

    return (
        <Drawer
            anchor={"left"}
            open={props.open}
            onClose={props.onClose}
            disableScrollLock
        >
            <div className="left-drawer">
                <div className="drawer-header">
                    <div className="drawer-header-title">Əsas Menu</div>
                    <IconButton
                        onClick={props.onClose}
                        className="drawer-header-close-button"
                    >
                        <CloseIcon />
                    </IconButton>
                </div>
                <hr />
                <div className="drawer-content">
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <ListItemButton sx={{ pl: 0 }}>
                            <ListItemText primary="HAQQIMIZDA" />
                        </ListItemButton>
                        <Divider />
                        <ListItemButton sx={{ pl: 0 }}>
                            <ListItemText primary="XIDMƏTLƏR" />
                        </ListItemButton>
                        <Divider />
                        
                        <ListItemButton sx={{ pl: 0 }}>
                            <ListItemText primary="MƏHSULLAR" />
                        </ListItemButton>
                        <Divider />
                        
                        <ListItemButton sx={{ pl: 0 }}>
                            <ListItemText primary="PARTNYORLAR" />
                        </ListItemButton>
                        <Divider />
                        <ListItemButton sx={{ pl: 0 }}>
                            <ListItemText primary="XƏBƏRLƏR" />
                        </ListItemButton>
                        <Divider />
                        <ListItemButton sx={{ pl: 0 }}>
                            <ListItemText primary="ƏLAQƏ" />
                        </ListItemButton>
                        <Divider />
                        
                    </List>
                </div>
            </div>
        </Drawer>
    );
}
