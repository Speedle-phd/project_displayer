import { createClient } from 'contentful'
import { useEffect, useState } from 'react'

const client = createClient({
   space: import.meta.env.VITE_SPACE_ID,
   environment: 'master',
   accessToken: import.meta.env.VITE_ACCESS_TOKEN_DELIVERY,
})

export const useFetchContent = () => {
   const [loading, setLoading] = useState(false)
   const [projects, setProjects] = useState([])

   async function getData() {
      setLoading(true)
      try {
         const { items } = await client.getEntries({
            content_type: 'projectDisplayer',
         })
         const reducedItems = items.reduce((total, curr) => {
            const contentObject = {
               id: curr.sys.id,
               title: curr.fields.title,
               url: curr.fields.url,
               image: curr.fields.image.fields.file.url,
            }
            total = [...total, contentObject]
            return total
         }, [])
         setProjects(reducedItems)
      } catch (error) {
         console.log(error)
      } finally {
         setLoading(false)
      }
   }

   useEffect(() => {
      getData()
   }, [])

   return { loading, projects, getData }
}
