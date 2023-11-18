import React from 'react'

function Card({image}) {

    const tags = image.tags.split(",");

  return (
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={image.webformatURL} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Photo By {image.user}</h3>
        </a>
        <button href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Likes : {image.likes} 
        </button> <button href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Downloads : {image.downloads}
        </button> <button href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View :{image.views}
        </button>

        <div className='px-6 py-4'>

            {tags.map((tag, index)=>(
                 <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm fond-semibold text-gray-700 mr-2"
                 >#{tag}</span> 
            ))}
           
        </div>
    </div>
</div>
  )
}

export default Card