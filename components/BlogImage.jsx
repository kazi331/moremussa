
import Image from 'next/image'
import img1 from '../resources/images/1.jpeg'
import img2 from '../resources/images/2.jpg'
import img3 from '../resources/images/3.jpg'
import img4 from '../resources/images/4.jpg'
import img5 from '../resources/images/5.webp'

const BlogImage = () => {
    const images = [img1, img2, img3, img4, img5]

    return (<>

        {images.map((image, i) => (
            <div key={i} className="w-full rounded sm:w-1/1">
                <div className="p-2">
                    <Image className="rounded w-full aspect-auto" src={image} alt="" />
                </div>
            </div>
        ))}
    </>

    )
}

export default BlogImage