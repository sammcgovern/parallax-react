import { useEffect, useState } from 'react'

const useImage = (fileName: string) => {
    const [image, setImage] = useState("")

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../../images/${fileName}.svg`);
                setImage(response.default);
            } catch (err:any) {
                console.error(err)
            } 
        }

        fetchImage()
    }, [fileName])

    return {
        image,
    }
}

export default useImage