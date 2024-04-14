import React from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth0 } from '@auth0/auth0-react';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const Card = ({ data, handlelike, handleunlike, handleDelete, handledislike, handleundislike }) => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0(); // Destructure isAuthenticated and loginWithRedirect
  const userId = user ? user.sub : undefined;

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
          <ThumbUpOffAltIcon className="text-gray-500 cursor-pointer mr-2" onClick={isAuthenticated ? () => { handlelike(userId, data._id) } : loginWithRedirect} />
        )}<span>{data.like.length} likes </span>
        {data && data.dislike && data.dislike.includes(userId) ? (
          <ThumbDownAltIcon className="text-blue-500 cursor-pointer mr-2" onClick={() => { handleundislike(userId, data._id) }} />
        ) : (
          <ThumbDownOffAltIcon className="text-gray-500 cursor-pointer mr-2" onClick={() => { handledislike(userId, data._id) }} />
        )}
        <span>{data.dislike.length} dislikes</span>
      </div>
    </div>
  );
};

export default Card;
