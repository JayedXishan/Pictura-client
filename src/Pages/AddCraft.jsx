import React from 'react';
import useAuth from '../Hooks/useAuth'
const AddCraft = () => {
    const { user } = useAuth() || {};

    const handleAdd = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.item_name.value;
        const image = form.image.value;
        const subcategory = form.subcategory.value;
        const customization = form.customization.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const time = form.time.value;
        const status = form.status.value;
        const description = form.description.value;
        const email = user.email;

        let No = '1';
        if (subcategory === 'Landscape Painting') {
            No = '1';
        }
        else if (subcategory === 'Portrait Drawing') {
            No = '2';
        }
        else if (subcategory === 'Watercolour Painting') {
            No = '3';
        }
        else if (subcategory === 'Oil Painting') {
            No = '4';
        }
        else if (subcategory === 'Charcoal Sketching') {
            No = '5';
        }
        else if (subcategory === 'Cartoon Drawing') {
            No = '6';
        }

        const item = { No, name, subcategory, customization, image, price, rating, time, status, description, email };



        fetch('https://pictura-server.vercel.app/craft', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        fetch('https://pictura-server.vercel.app/category', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    return (
        <div className='lg:w-[1170px] mx-auto'>
            <div className="p-6 bg-[#FFF2E1] ">
                <form onSubmit={handleAdd} className="container flex flex-col mx-auto space-y-12">
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Item Name</label>
                            <input name='item_name' type="text" placeholder="Item name" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 " />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Image URL</label>
                            <input name='image' type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="username" className="text-sm">Subcategory</label>
                            <select name='subcategory' className="select select-bordered select-sm w-full  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 ">
                                {/* <option disabled selected>Select</option> */}
                                <option selected>Landscape Painting</option>
                                <option>Portrait Drawing</option>
                                <option>Watercolour Painting</option>
                                <option>Oil Painting</option>
                                <option>Charcoal Sketching</option>
                                <option>Cartoon Drawing</option>
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Customization</label>
                            <select name='customization' className="select select-bordered select-sm w-full  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 ">
                                <option selected>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Price</label>
                            <input name='price' type="text" placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 " />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Rating</label>
                            <input name='rating' type="text" placeholder="Rating" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Processing Time</label>
                            <input name='time' type="text" placeholder="Time" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 " />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Status</label>
                            <input name='status' type="text" placeholder="Status" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600" />
                        </div>
                        <div className="col-span-full">
                            <label className="text-sm">Description</label>
                            <textarea name='description' placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600"></textarea>
                        </div>

                    </div>
                    <input type="submit" value="Add" className='btn bg-gray-700 text-white' />
                </form>
            </div>
        </div>
    );
};

export default AddCraft;