const SingleProject = ({ title, url, image }) => {
   return (
      <a href={url} className='project'>
         <img className='img' src={image} />
         <h5>{title}</h5>
      </a>
   )
}

export default SingleProject
