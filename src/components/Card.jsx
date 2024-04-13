import React from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useAuth0 } from '@auth0/auth0-react';

const Card = ({ data, handlelike, handleunlike, handleDelete }) => {
  const { user } = useAuth0();
  const userId = user.sub;

  return (
    <div className="flex py-5 px-5 flex-col col-span-full xl:col-span-6 bg-gradient-to-r from-[#434974] to-[#242949] shadow-lg rounded-lg border border-slate-700">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img className="h-8 w-8 rounded-full mr-2" src={data.picture} alt="Profile" />
          <span className="text-white-800 font-semibold">{data.username}</span>
        </div>
        {userId === data.userId && (
          <div>
            {/* <EditIcon className="text-black cursor-pointer" /> */}
            <DeleteIcon className="text-white cursor-pointer" onClick={() => handleDelete(data._id)} />
          </div>
        )}
      </div>
      <h2 className="text-lg font-bold mb-2">Title -   {data.title}</h2>
      <p className="text-white-700 mb-4">Description - {data.description}</p>
      <div className="mb-4">
        <img className="w-full rounded" src={data.image} alt="Blog" />
      </div>
      <div className="flex items-center text-white-700">
        {data && data.like && data.like.includes(userId) ? (
          <ThumbUpIcon className="text-blue-500 cursor-pointer mr-2" onClick={() => { handleunlike(userId, data._id) }} />
        ) : (
          <ThumbUpOffAltIcon className="text-gray-500 cursor-pointer mr-2" onClick={() => { handlelike(userId, data._id) }} />
        )}
        <span >{data.like.length} likes</span>
      </div>
    </div>
  );
};

export default Card;
