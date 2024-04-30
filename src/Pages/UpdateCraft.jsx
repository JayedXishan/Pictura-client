import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
const UpdateCraft = () => {
    const craft = useLoaderData();
    const { _id, name, subcategory, customization, image, price, rating, time, status, description } = craft;
    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.item_name.value;
        const image = form.image.value;
        const subcategory = form.subcategory.value;
        const customization = form.customization.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const time = form.item_name.value;
        const status = form.status.value;
        const description = form.description.value;

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

        const item = { _id, No, name, subcategory, customization, image, price, rating, time, status, description };


        fetch(`http://localhost:5000/craft/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Updated!",
                        text: "You have successfulLy updated!",
                        icon: "success"
                    });
                }
            })

        fetch(`http://localhost:5000/category/${_id}`, {
            method: "PUT",
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
            <div className="p-6 bg-slate-200 ">
                <form onSubmit={handleUpdate} className="container flex flex-col mx-auto space-y-12">
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Item Name</label>
                            <input name='item_name' type="text" defaultValue={name} placeholder="Item name" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 " />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Image URL</label>
                            <input name='image' type="text" defaultValue={image} placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="username" className="text-sm">Subcategory</label>
                            <select name='subcategory' defaultValue={subcategory} className="select select-bordered select-sm w-full  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 ">
                                {/* <option disabled selected>Select</option> */}
                                <option >Landscape Painting</option>
                                <option>Portrait Drawing</option>
                                <option>Watercolour Painting</option>
                                <option>oil Painting</option>
                                <option>Charcoal Sketching</option>
                                <option>Cartoon Drawing</option>
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Customization</label>
                            <select name='customization' defaultValue={customization} className="select select-bordered select-sm w-full  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 ">
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Price</label>
                            <input name='price' defaultValue={price} type="text" placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 " />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Rating</label>
                            <input name='rating' defaultValue={rating} type="text" placeholder="Rating" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Processing Time</label>
                            <input name='time' type="text" defaultValue={time} placeholder="Time" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 " />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Status</label>
                            <input name='status' type="text" defaultValue={status} placeholder="Status" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600" />
                        </div>
                        <div className="col-span-full">
                            <label className="text-sm">Description</label>
                            <textarea name='description' defaultValue={description} placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600"></textarea>
                        </div>

                    </div>
                    <input type="submit" value="Update" className='btn bg-gray-700 text-white' />
                </form>
            </div>
        </div>
    );
};

export default UpdateCraft;