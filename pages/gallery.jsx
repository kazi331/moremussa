import Image from 'next/image'

const Gallery = () => {
  return (
    <section className="overflow-hidden text-gray-700">
      <div className="container mx-auto">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                src="https://source.unsplash.com/random/1280x720" width="300" height="200" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                src="https://source.unsplash.com/random/1280x720" width="300" height="200" />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                src="https://source.unsplash.com/random/1280x720" width="300" height="200" />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="w-full p-1 md:p-2">
              <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                src="https://source.unsplash.com/random/1280x720" width="300" height="200" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                src="https://source.unsplash.com/random/1280x720" width="300" height="200" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                src="https://source.unsplash.com/random/1280x720" width="300" height="200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery