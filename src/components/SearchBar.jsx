import {IconButton, Option, Select, Typography} from "@material-tailwind/react";
import {TbReload, TbSortAscendingNumbers, TbSortDescendingNumbers, TbZoomReset} from "react-icons/tb";

const SearchBar = () => {
    return (
        <>
            <div className="flex gap-6 items-center border-r border-r-white pr-4">
                <Typography
                    variant="lead"
                    color="white"
                >
                    5 randoms
                </Typography>
                <IconButton color="purple">
                    <i>
                        <TbReload size={24}/>
                    </i>
                </IconButton>
            </div>
            <div className="flex gap-6 items-center border-r border-r-white pr-4">
                <Typography
                    variant="lead"
                    color="white"
                >
                    Order ascending
                </Typography>
                <IconButton color="light-green">
                    <i>
                        <TbSortAscendingNumbers size={24}/>
                    </i>
                </IconButton>
            </div>
            <div className="flex gap-6 items-center border-r border-r-white pr-4">
                <Typography
                    variant="lead"
                    color="white"
                >
                    Order descending
                </Typography>
                <IconButton color="yellow">
                    <i>
                        <TbSortDescendingNumbers size={24}/>
                    </i>
                </IconButton>
            </div>
            <div className="flex gap-6 items-center border-r border-r-white pr-4">
                <Typography
                    variant="lead"
                    color="white"
                >
                    Type
                </Typography>
                <Select
                    color="light-blue"
                    variant="static"
                    className="text-white"
                >
                    <Option>Grass</Option>
                    <Option>Water</Option>
                    <Option>Fire</Option>
                    <Option>Electric</Option>
                    <Option>Normal</Option>
                </Select>
            </div>
            <div className="flex gap-6 items-center border-r border-r-white pr-4">
                <Typography
                    variant="lead"
                    color="white"
                >
                    Reset
                </Typography>
                <IconButton color="yellow">
                    <i>
                        <TbZoomReset size={20}/>
                    </i>
                </IconButton>
            </div>
        </>
    );
};

export default SearchBar;