export default function UserReview() {
    return (
      <div className="flex">
        <div className="flex flex-col items-center my-20 w-1/2">
          <img
            src="/opengraph-image.png"
            alt={`profile`}
            className="w-40 h-40 rounded-full mb-4"
          />
            <div className="flex items-center mb-2">
                <span className="text-xl font-semibold">Sourya Pennuru</span>
            </div>
            <div className="flex flex-row">
                {Array.from({ length: 5 }, (_, index) => (
                    <svg
                    key={index}
                    className="w-4 h-4 fill-current text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    >
                    <path d="M10 2l1.1 3.4h3.4L12 9l1.1 3.4H10l-2.2 1.6L5.3 12H2.7L4 9 2 5.4H5l2-3.4L10 2z" />
                    </svg>
                ))}
            </div>
            <p className="italic text-gray-700 w-1/2 text-center">I was able to land my first internship using Snowmail! If you are looking for an internship, and are tired of manually cold emailing, I would recommend Snowmail! </p>
        </div>

        <div className="flex flex-col items-center my-20 w-1/2">
          <img
            src="/opengraph-image.png"
            alt={`profile`}
            className="w-40 h-40 rounded-full mb-4"
          />
            <div className="flex items-center mb-2">
                <span className="text-xl font-semibold">Sourya Pennuru</span>
            </div>
            <div className="flex flex-row">
                {Array.from({ length: 5 }, (_, index) => (
                    <svg
                    key={index}
                    className="w-4 h-4 fill-current text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    >
                    <path d="M10 2l1.1 3.4h3.4L12 9l1.1 3.4H10l-2.2 1.6L5.3 12H2.7L4 9 2 5.4H5l2-3.4L10 2z" />
                    </svg>
                ))}
            </div>
            <p className="italic text-gray-700 w-1/2 text-center">I was able to land my first internship using Snowmail! If you are looking for an internship, and are tired of manually cold emailing, I would recommend Snowmail! </p>
        </div>

        <div className="flex flex-col items-center my-20 w-1/2">
          <img
            src="/opengraph-image.png"
            alt={`profile`}
            className="w-40 h-40 rounded-full mb-4"
          />
            <div className="flex items-center mb-2">
                <span className="text-xl font-semibold">Sourya Pennuru</span>
            </div>
            <div className="flex flex-row">
                {Array.from({ length: 5 }, (_, index) => (
                    <svg
                    key={index}
                    className="w-4 h-4 fill-current text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    >
                    <path d="M10 2l1.1 3.4h3.4L12 9l1.1 3.4H10l-2.2 1.6L5.3 12H2.7L4 9 2 5.4H5l2-3.4L10 2z" />
                    </svg>
                ))}
            </div>
            <p className="italic text-gray-700 w-1/2 text-center">I was able to land my first internship using Snowmail! If you are looking for an internship, and are tired of manually cold emailing, I would recommend Snowmail! </p>
        </div>

      </div>
      );
}