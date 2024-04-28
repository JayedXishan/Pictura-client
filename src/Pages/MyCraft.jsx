import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import MyCraftCard from "../Components/MyCraftCard";

const MyCraft = () => {
    const { user } = useAuth() || {};
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/mycraft/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
            });
    }, [user]);
    return (
        <div className="lg:w-[1170px] mx-auto">
            {
                item?.map(craft => (
                    <div className="mb-[16px]">
                        <MyCraftCard craft={craft}></MyCraftCard>
                    </div>
                ))
            }
        </div>
    );
};

export default MyCraft;